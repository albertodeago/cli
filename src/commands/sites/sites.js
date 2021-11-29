// @ts-check
const { generateCommandsHelp, generateDescriptionHelp, generateExamplesHelp, showHelp } = require('../../utils')

const { createSitesCreateCommand } = require('./sites-create')
const { createSitesDeleteCommand } = require('./sites-delete')
const { createSitesListCommand } = require('./sites-list')

/**
 * The sites command
 * @param {import('commander').OptionValues} options
 * @param {import('../base-command').BaseCommand} command
 */
const sites = (options, command) => {
  showHelp(command.name())
}

/**
 * Creates the `netlify sites` command
 * @param {import('../base-command').BaseCommand} program
 * @returns
 */
const createSitesCommand = (program) => {
  createSitesCreateCommand(program)
  createSitesListCommand(program)
  createSitesDeleteCommand(program)

  return program
    .command('sites')
    .description('Handle various site operations')
    .addHelpText('after', generateDescriptionHelp('The sites command will help you manage all your sites'))
    .addHelpText('after', generateExamplesHelp(['netlify sites:create --name my-new-site', 'netlify sites:list']))
    .addHelpText('after', generateCommandsHelp('sites', program))
    .action(sites)
}

module.exports = { createSitesCommand }
