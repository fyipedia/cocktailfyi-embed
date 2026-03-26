/**
 * cocktailfyi-embed — TypeScript declarations
 *
 * The embed script is self-executing. Simply import it to activate widgets.
 * All configuration is provided via data-* attributes on DOM elements.
 */

export {};

declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      /** Widget type for CocktailFYI */
      'cocktailfyi'?: 'recipe' | 'compare' | 'glossary' | 'faq' | 'guide' | 'ingredient' | 'pairing' | 'search' | 'flavor-radar' | 'abv-calculator';
      /** Entity slug (e.g. "cocktails") */
      slug?: string;
      /** Visual theme */
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      /** Widget design style */
      style?: 'modern' | 'classic';
      /** Widget size */
      size?: 'default' | 'compact' | 'large';
      /** Search box placeholder text */
      placeholder?: string;
    };
  }
}
