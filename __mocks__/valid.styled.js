import React from 'react';
import styled from 'styled-components';

const myvar = 'my-counter';

const StyledComponent = styled.div`
  .some-selector-custom-rules {
    margin: 1px 1px 1px 2px;
    font: 1em 'Times New Roman', Times, serif;
    color: lch(56.29% 19.86 10deg / 0.15);
    font-weight: 700;
    opacity: 0.5;
    display: flex;
    -webkit-touch-callout: none;
    top: 0;
    background: #123450aa;
    counter-reset: ${myvar};

    &[title~='text'] {
      color: rgb(0, 0, 0);
    }

    a:after {
      color: pink;
    }

    &:not(a).foo:not(:empty) {
      color: #fff;
    }

    @keyframes foo {
      from {
        color: red;
      }
      to {
        color: blue;
      }
    }

    input::placeholder {
      color: #000;
    }

    @media (max-resolution: 900dpi) {
      .foo {
        color: #000;
      }
    }

    @viewport {
      orientation: landscape;
    }
  }
`;

const MyComp = () => (
  <div
    style={{
      margin: '1px 1px 1px 2px',
      font: `1em 'Times New Roman', Times, serif`,
      color: 'lch(56.29% 19.86 10deg / 0.15)',
      fontWeight: 700,
      opacity: 0.5,
      display: 'flex',
      top: 0,
      background: '#123450aa',
    }}
  >
    MyComp
  </div>
);
