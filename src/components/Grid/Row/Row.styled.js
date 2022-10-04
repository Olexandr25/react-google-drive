import styled from 'styled-components'

export const RowStyled = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));

  & > * {
    box-sizing: border-box;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }

  .row.no-gutters {
    margin-right: 0;
    margin-left: 0;
  }

  // add > to target first child
  .row.no-gutters > [class^='col-'],
  .row.no-gutters > [class*=' col-'] {
    padding-right: 0;
    padding-left: 0;
  }
`

