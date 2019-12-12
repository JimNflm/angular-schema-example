import { normalize } from '@angular-devkit/core';
import { classify, dasherize } from '@angular-devkit/core/src/utils/strings';
import {
  apply,
  branchAndMerge,
  chain,
  filter,
  mergeWith,
  move,
  Rule,
  template,
  url
} from '@angular-devkit/schematics';
import { SchemaOptions } from './schema';

const stringUtils = { dasherize, classify };

function filterTemplates(options: SchemaOptions): Rule {
  if (!options.service) {
    return filter(
      path =>
        !path.match(/\.service\.ts$/) &&
        !path.match(/-item\.ts$/) &&
        !path.match(/\.bak$/)
    );
  }
  return filter(path => !path.match(/\.bak$/));
}

export default function(options: SchemaOptions): Rule {
  // TODO: Validate options and throw SchematicsException if validation fails
  options.path = options.path ? normalize(options.path) : options.path;

  const templateSource = apply(url('./files'), [
    filterTemplates(options),
    template({
      ...stringUtils,
      ...options
    }),
    move('src/app/my-schema')
  ]);

  return chain([branchAndMerge(chain([mergeWith(templateSource)]))]);
}
