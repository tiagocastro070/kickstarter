import { execSync }  from "child_process";
import fs from "fs-extra";
import chalk from "chalk";

const COVERAGE_DIR = "coverage-reports";
const REPORTS_DIR = `${COVERAGE_DIR}/reports`;
const FINAL_OUTPUT_DIR = "coverage";

const log = console.log;

const runCommands = (commands) => {
	return new Promise<void>((resolve, reject) => {
		try {
			commands.forEach((command) => {
				execSync(command, { stdio: "inherit" });
			});
			resolve();
		} catch (err) {
			log(chalk.bgRed.bold(`⚠️ Error running commands: ${err}`));
			reject();
		}
	});
}

const bootstrapFolders = () => {
	return new Promise<void>((resolve, reject) => {
		try {
			// Cleans the reports folder
			fs.emptyDirSync(REPORTS_DIR);

			// Copies each coverage file to the reports folder
			runCommands([
				`cp ${COVERAGE_DIR}/jest/coverage-final.json ${REPORTS_DIR}/from-jest.json`,
				`cp ${COVERAGE_DIR}/cypress/coverage-final.json ${REPORTS_DIR}/from-cypress.json`,
			]);
			log(chalk.green("✅ Copied jest and cypress coverage folders!"));

			fs.emptyDirSync(".nyc_output");
			fs.emptyDirSync(FINAL_OUTPUT_DIR);
			log(chalk.green("✅ Finished bootstraping folders!"));

			resolve();
		} catch (err) {
			log(chalk.yellowBright(`❌ Error bootstraping folders: ${err}`));

			reject();
		}
	});
}

bootstrapFolders()
	.then(() =>
		runCommands([
			`npx nyc merge ${REPORTS_DIR}`,
			`mv coverage.json .nyc_output/out.json`,
			`npx nyc report --reporter=text-summary`,
			`npx nyc report --reporter=html --report-dir=${FINAL_OUTPUT_DIR}`,
		]),
	)
	.then(() => {
		log(chalk.green("✅ Finished merging coverage!"));
	})
	.catch((err) => {
		log(chalk.yellowBright(`❌ Error merging reports: ${err}`));
	});
