// This comment should pass with proper whitespace inside

import styled from 'styled-components';

const InvalidColor = styled.div`
  /* color-no-invalid-hex */
  color: #fff;
`;

const AlphaValue = styled.div`
  /* alpha-value-notation */
  opacity: 0.5;
`;

const ColorFunction = styled.div`
  /* color-function-notation */
  color: rgba(128, 128, 128, 1);
`;

const FontWeight = styled.div`
  /* font-weight-notation */
  font-weight: 700;
`;

/*import-notation*/
const ImportNotation = styled.div`
  @import "styles.css";
`;

/*selector-pseudo-element-colon-notation*/
const PseudoElement = styled.div`
  :before {
    content: '';
  }
`;

/*declaration-property-value-no-unknown*/
const UnknownProperty = styled.div`
  /* This property is valid */
`;

/*max-nesting-depth*/
const NestingDepth = styled.div`
  .nesting-1 {
    .nesting-2 {
      .nesting-3 {
        color: #f00;
      }
    }
  }
`;

/*selector-max-attribute*/
const MaxAttribute = styled.div`
  .max-attribute[class][data-attr][type] {
    color: #00f;
  }
`;

/*selector-max-combinators*/
const MaxCombinators = styled.div`
  .combinators-1 > .combinators-2 + .combinators-3 {
    color: #008000;
  }
`;

/*selector-max-id*/
const MaxId = styled.div`
  #id1 {
    color: #ff0;
  }
`;

/*selector-max-compound-selector*/
const MaxCompoundSelector = styled.div`
  .compound1.compound2.compound3 {
    color: #800080;
  }
`;

/*selector-max-pseudo-class*/
const MaxPseudoClass = styled.div`
  .pseudo-class:hover:focus:active {
    color: #ffa500;
  }
`;

/*selector-max-type*/
const MaxType = styled.div`
  div span p {
    color: #a52a2a;
  }
`;

/*selector-max-universal*/
const MaxUniversal = styled.div`
  * {
    color: #ffc0cb;
  }
`;

/*color-named*/
const NamedColor = styled.div`
  color: #f00;
`;

/*color-hex-alpha*/
const HexAlpha = styled.div`
  color: rgba(255, 0, 0, 0.5);
`;
