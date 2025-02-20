import { css } from 'lit';

export const wcStyles = css`
  .blue-button {
    color: white;
    background-color: blue;
  }
  .blue-button:disabled {
    background-color: grey;
  }
  .surface1 {
    color: green;
    background-color: var(--green-1);
  }
  .cluster {
    display: flex;
    flex-wrap: wrap;
    row-gap: var(--space, var(--size-2));
    column-gap: var(--space, var(--size-fluid-5));
    justify-content: space-between;
    align-items: center;
  }
`;
