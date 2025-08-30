# Overview
This is a simple, responsive product cards exercise with an accessible shopping cart feature built with HTML,SCSS and JS. The products are gotten from a JSON file and displayed using grid layout. The main goal of the project is as follows. A user must be able to view products and should be able to add products to his/her cart when 'Add to Cart' button is clicked. As the product is added there is a counter displayed at the top to show the product has been added.

# Approach and Implementation
## HTML (Semantic and Accessible)
- Semantic elements/tags such as (`header`, `main`, `section`, `article`, `ul`, `li`) were used to improve accessiblity and structure.
- ARIA roles and labels were included(`aria-label`, `aria-live`, `aria-busy` ) to ensure WCAG 2.1 compliance.
- SVG was used for the cart icon with aria attribute added to avoid redundancy.

## Styling - SCSS/CSS 
- Mobile-first approach was used with media queries breakpoints for tablets and desktops. Used features like CSS grid, Flexbox for the responsive layout as well. 
- Styled with SCSS for scalability and maintainability purpose.
- There are defined CSS variables for color, max-width to ensure consistency
- Visible focus states were used for keyboard navigation.

## Javascript 
- Products data are fetched asynchronously from `productLists.json` using the `fetch` method within `async/await` `getproduct` function.
- The product cards were dynamically populated using DOM manipulation
- "Add to Cart" button serializes the product data and stores it in `localStorage` 
- The counter updates automatically using `aria-live` for screen readers

## Data Management
- Product data was stored is a separate file `ProductLists.json` for separation of concerns.

# Trade-offs
- LocalStorage used for Cart: This was chosen for simplicity and persistence sake, but it won't be the best for multi-device syncing.

- There is no Shopping Cart Page, Removal and Checkout Feature: For this version, only cart count updates are considered. A full cart management system with other features could be added for later versions.

- Inline Event Listeners instead Delegation: Event listeners were attached to each "Add to Cart" button for clarity purpose, though event delegation would be more scalable and appropriate for large product lists.

- Accessibility: Extra ARIA attributes were added, but avoided overuse to prevent redundancy (e.g. using aria-hidden on decorative SVG).

- Performance: Rendering uses just basic loops and direct DOM updates but for larger datasets, a virtual DOM library like (React/Vue) might be more appropriate and efficient.