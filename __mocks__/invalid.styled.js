// This comment should fail due to lack of whitespace inside

import styled from 'styled-components';

const InvalidColor = styled.div`
  /*color-no-invalid-hex*/
  color: #zzzzzz;
`;

const AlphaValue = styled.div`
  /*alpha-value-notation*/
  opacity: 50%;
`;

const ColorFunction = styled.div`
  /*color-function-notation*/
  color: color(display-p3 0.5 0.4 0.3);
`;

const FontWeight = styled.div`
  /*font-weight-notation*/
  font-weight: bold;
`;

/*import-notation*/
const ImportNotation = styled.div`
  @import url("styles.css");
`;

/*selector-pseudo-element-colon-notation*/
const PseudoElement = styled.div`
  ::before {
    content: '';
  }
`;

/*declaration-property-value-no-unknown*/
const UnknownProperty = styled.div`
  foo-bar: 42;
`;

/*max-nesting-depth*/
const NestingDepth = styled.div`
  .nesting-1 {
    .nesting-2 {
      .nesting-3 {
        .nesting-4 {
          color: red;
        }
      }
    }
  }
`;

/*selector-max-attribute*/
const MaxAttribute = styled.div`
  .max-attribute[class][data-attr][type][role] {
    color: blue;
  }
`;

/*selector-max-combinators*/
const MaxCombinators = styled.div`
  .combinators-1 > .combinators-2 + .combinators-3 ~ .combinators-4 {
    color: green;
  }
`;

/*selector-max-id*/
const MaxId = styled.div`
  #id1 #id2 {
    color: yellow;
  }
`;

/*selector-max-compound-selector*/
const MaxCompoundSelector = styled.div`
  .compound1.compound2.compound3.compound4 {
    color: purple;
  }
`;

/*selector-max-pseudo-class*/
const MaxPseudoClass = styled.div`
  .pseudo-class:hover:focus:active:checked {
    color: orange;
  }
`;

/*selector-max-type*/
const MaxType = styled.div`
  div span p ul {
    color: brown;
  }
`;

/*selector-max-universal*/
const MaxUniversal = styled.div`
  * * {
    color: pink;
  }
`;

/*color-named*/
const NamedColor = styled.div`
  color: red;
`;

/*color-hex-alpha*/
const HexAlpha = styled.div`
  color: #ff000080;
`;
