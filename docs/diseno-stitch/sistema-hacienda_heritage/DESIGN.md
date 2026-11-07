# Design System Document: The Rustic Editorial Heritage

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Curated Hearth."**

We are moving away from the "generic grocery store" aesthetic to create a digital experience that feels like a warm, Colombian kitchen nestled in a modern European landscape. This system balances the rugged, tactile soul of 'Paisa' culture—clay pots, burlap, and hand-tilled earth—with a sophisticated, high-end editorial layout. 

The "template" look is rejected here. We utilize **intentional asymmetry**, where large editorial typography overlaps with textured imagery, and **tonal layering** replaces rigid grid lines. The goal is to make the user feel the "Sabor de Casa" (Taste of Home) through a premium, intentional interface that treats Colombian ingredients as culinary art.

---

## 2. Colors & Visual Soul
The palette is a sophisticated extraction of the Colombian flag and Paisa landscapes, shifting from bright primaries to deep, earthy tones.

*   **Primary (#584000):** A deep, roasted coffee brown. Use this for authoritative text and high-contrast actions.
*   **Secondary (#904c27):** Terracotta. This provides the warmth of clay pots (ollas de barro).
*   **Tertiary (#8d0014):** A muted, wine-like red. Use sparingly for passion points or artisanal callouts.
*   **Neutral Background (#fcf9f4):** An "off-white" bone color that mimics unbleached linen or parchment, preventing the "clinical" feel of pure white.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Boundaries between content must be defined exclusively through background color shifts. For instance, a `surface-container-low` section should sit against a `surface` background. Let the change in tone define the edge, not a stroke.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper.
*   **Base:** `surface` (#fcf9f4)
*   **Nested Elements:** Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, natural lift. This "nested" approach creates depth without clutter.

### The "Glass & Gradient" Rule
To add "soul," use subtle gradients on CTAs, transitioning from `primary` (#584000) to `primary-container` (#755700). For floating navigation or modals, apply a **Glassmorphism** effect: use a semi-transparent `surface` color with a `backdrop-blur` of 12px to 20px, allowing the rich, earthy background textures to bleed through softly.

---

## 3. Typography: The Robust Voice
We pair the structural strength of **Epilogue** with the friendly, approachable nature of **Be Vietnam Pro**.

*   **Display (Epilogue):** Large, bold, and unapologetic. Use `display-lg` (3.5rem) for hero statements. These should often be set with tight letter-spacing (-0.02em) to feel robust and "hand-carved."
*   **Headlines (Epilogue):** Used to anchor sections. These provide the "editorial" feel.
*   **Body (Be Vietnam Pro):** High legibility at `body-lg` (1rem). The font's openness ensures a friendly, welcoming tone that balances the heavy headlines.
*   **Labels:** Use `label-md` for metadata. These should be treated as "tags" on a burlap sack—clear, functional, and grounded.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to simulate height; we use light and tone.

*   **The Layering Principle:** Depth is achieved by stacking `surface-container` tiers (Lowest to Highest). This mimics the stacking of ingredients or handmade plates.
*   **Ambient Shadows:** If a floating element (like a FAB or persistent cart) is required, use a shadow with a blur of 32px and 4%-8% opacity. Use a tinted shadow color derived from `on-surface` (#1c1c19) rather than pure black.
*   **The Ghost Border Fallback:** If a container absolutely requires a border for accessibility, use the `outline-variant` token at **15% opacity**. A solid, 100% opaque border is a failure of the system.
*   **Texture Integration:** Incorporate subtle burlap or clay textures within `surface-variant` areas. These textures should be high-frequency but low-contrast, providing a tactile "tooth" to the digital screen.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` background. No borders. Radius: `md` (0.75rem). Transition to `primary-container` on hover.
*   **Secondary:** `secondary-container` background with `on-secondary-container` text. This is your "Terracotta" action.
*   **Tertiary:** No background. Bold `primary` text with a subtle underline in `outline-variant` (20% opacity).

### Cards & Lists
*   **Forbid Divider Lines:** Separate list items using vertical white space (use the 1.5rem or 2rem spacing scale) or a subtle shift to `surface-container-low`.
*   **Editorial Cards:** Use `xl` (1.5rem) roundedness for large product cards. Images should have a subtle inner-glow to look like they are set into the card.

### Input Fields
*   **Style:** Minimalist. Use a `surface-container-high` background. Instead of a 4-sided border, use a 2px bottom-stroke in `outline` when focused.
*   **Error States:** Use `error` (#ba1a1a) for helper text, but avoid turning the entire box red. Keep the design sophisticated even in failure.

### Signature Component: The "Canasta" (Cart)
The shopping cart should not be a standard drawer. Design it as a "Layered Canvas" that slides in, using a `backdrop-blur` and a `surface-container-lowest` background to feel like a premium inventory list.

---

## 6. Do's and Don'ts

### Do
*   **Do** use asymmetrical layouts where text sits 25% over an image of a clay pot or fresh arepa.
*   **Do** lean into the "Warmth." Use `secondary-fixed` for background highlights to give a sun-drenched Colombian feel.
*   **Do** prioritize "Breathing Room." High-end editorial design requires more white space than a standard e-commerce site.

### Don'ts
*   **Don't** use 1px black or grey borders. This destroys the "rustic" handmade feel.
*   **Don't** use generic system shadows. They look "techy" and cheap.
*   **Don't** use pure white (#ffffff) for large backgrounds. It is too harsh for the 'Paisabor' brand; always default to `surface` (#fcf9f4).
*   **Don't** crowd the interface. If a section feels busy, increase the spacing between elements rather than adding a divider line.