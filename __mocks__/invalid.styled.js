import React from 'react';
import styled from 'styled-components';

const myvar = 'my-counter';

const StyledComponent = styled.div`
  .some-selector-custom-rules {
    border-radius: 1px 2px 1px 2px;
    font: 1em Times New Roman, Times, serif;
    color: lch(56.29% 19.86 10 / 15%);
    font-weight: bold;
    opacity: 50%;
    display: -webkit-flex;
    -webkit-transform: scale(1);
    top: 0px;
    background: #12345aa;
    counter-reset: ${myvar};

    &[title='flower'] {
      color: rgb(0 0 0);
    }

    a::after {
      color: pink;
    }

    &:not(a):not(div) {
      color: #ffffff;
    }

    @media (-o-max-device-pixel-ratio: 1/1) {
    }

    @keyframes foo {
      from {
      }
      100% {
      }
    }

    @import url('foo.css');

    input::-moz-placeholder {
    }

    @-ms-viewport {
      orientation: landscape;
    }
  }
`;

const MyComp = () => (
  <div
    style={{
      borderRadius: '1px 2px 1px 2px',
      font: '1em Times New Roman, Times, serif',
      color: 'lch(56.29% 19.86 10 / 15%)',
      fontWeight: 'bold',
      opacity: '50%',
      display: '-webkit-flex',
      '-webkit-transform': 'scale(1)',
      top: '0px',
      background: '#12345aa',
    }}
  >
    MyComp
  </div>
);
