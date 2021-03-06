import { CodeSmellStructure } from '../../models/codeSmellStructure'

const f1 = new CodeSmellStructure(
  'F1',
  'Clean-Code/Functions',
  'Too Many Arguments',
  'Functions should have a small number of arguments. No argument is best, followed by one, two and three. More than three is very questionable and should be avoided. Consider using a parameter object and factory.',
  'Clean-Code',
  288
)

const f2 = new CodeSmellStructure(
  'F2',
  'Clean-Code/Functions',
  'Output Arguments',
  'Output arguments are counter intuitive. Readers expect arguments to be inputs, not outputs. If your function must return multiple different items, consider returning a return object that wraps all returned items instead.',
  'Clean-Code',
  288
)

const f3 = new CodeSmellStructure(
  'F3',
  'Clean-Code/Functions',
  'Flag Arguments',
  'Flag arguments loudly declare that the function does more than one thing. They are confusing and should be eliminated or avoided at all costs.',
  'Clean-Code',
  288
)

const f4 = new CodeSmellStructure(
  'F4',
  'Clean-Code/Functions',
  'Dead Function',
  "Methods that are never called should be discarded. Keeping dead code around is wasteful. Don't be afraid to delete the function. Remember that source control still has a copy of that function anyway.",
  'Clean-Code',
  288
)

export { f1, f2, f3, f4 }
