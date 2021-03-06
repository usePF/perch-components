# Changelog

## 2.2.0

- Add support for nested Formik fields
- Upgrade dependencies

## 2.1.1

- Fix styling for AutoTable messages

## 2.1.0

- Add `padding` and `size` props to Auto/BaseTable [(new in MUI v4)](https://material-ui.com/api/table/)

## 2.0.0

- Upgrade to Material UI v4

## 1.4.0

- Upgrade perch-data and react-router, as well as other minor dependency updates

## 1.3.0

- Upgrade to scoped and hosted perch-data package

## 1.2.2

- Add fallback key for rows without ids #28

## 1.2.1

- Fix issue with context vs Consumer in Formik

## 1.2.0

- Add spinner for SaveButton loading state
- Upgrade to Formik 1.x

## 1.1.0

- Add `tableActions` to AutoTable and BaseTable

## 1.0.0

- Add docs to `/docs` folder
- Remove `/lib` folder and replace with npm prepare script

## 0.13.0

- Updated material-ui to 1.5.1

## 0.12.0

- Fix incorrect variables being passed within AutoTable

## 0.11.0

- Add `fullWidth` prop to AutoTable/BaseTable
- Add `options` prop to AutoTable for Data
- Rename AutoTable's `filter` => `variables`

## 0.10.0

- Add default UI for a noResults state
- Add renderError and renderNoResults for customization of states

## 0.9.3

- Remove `type=search` for cross-browser consistency

## 0.9.2

- Clear selections after multiselect action is triggered

## 0.9.1

- Fix null vs undefined sort props

## 0.9.0

- BREAKING: Change the child function signature for AutoTable
- Add multiselect support to AutoTable and BaseTable
- Change MUI peer dependency requirement
- Add clear button to SearchBar
- Add ActionButton and ActionBar

## 0.8.2

- Update perch-data to v0.19.1 (prevent out-of-order renders with successive refetches)

## 0.8.1

- Update perch-data to v0.19.0

## 0.8.0

- Add optional forceSubmit prop to SaveButton
- Add support for multiSelect and non-native selects to MaterialInputSelect
- Add checkbox option for MaterialInputBoolean
- Fix falsy values in form fields

## 0.7.2

- Update perch-data to v0.17.1

## 0.7.1

- Update perch-data to v0.17.0

## 0.7.0

- Replace AutoTable's second arg (`refetch`) with an arg "bag" like Formik
- Update perch-data to v0.16.1

## 0.6.0

- Updates for MUI beta v30-44

## 0.5.2

- Update perch-data to v0.15.1
- Pass `refetch` as optional second argument to AutoTable

## 0.5.1

- Force loading state to take priority over stale data
- Optimistically update the UI when changing table props
- Set search debounce to 1s (previously 300ms)

## 0.5.0

- [Breaking] Rename `paginatable` to `pageable`
- Add logic to clear page and sort when AutoTable filters/search change
- Add polyfill for React 16.3 lifecycle methods

## 0.4.0

- [Breaking] Removed `maxRows` and `size` from AutoTable
- Upgraded to React 16
- Addeed configurable rowsPerPage to AutoTable/Basetable

## 0.3.0

- Add support for hiding columns in Auto/BaseTable via the [MUI Hidden Component](https://material-ui-next.com/api/hidden/).
- Fix a header padding issue with AutoTable

## 0.2.0

- Upgrade to perch-data v0.12.0 [ Breaking: Now uses a Provider ]
- Fix all lint errors
- Upgrade dependencies

## 0.1.0

- Initial release
