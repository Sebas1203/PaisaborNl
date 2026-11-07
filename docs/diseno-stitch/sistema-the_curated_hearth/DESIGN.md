# Design System: The Curated Hearth

## 1. Overview & Creative North Star
**The Creative North Star: "The Digital Hacienda"**
This design system moves away from the sterile, modular appearance of traditional e-commerce to create an experience that feels tactile, storied, and warm. We are not just building a store; we are inviting the user into a high-end editorial kitchen in the heart of Colombia, transported to the Netherlands. 

To achieve this, we break the "template" look by utilizing **intentional asymmetry**—such as staggered image grids and overlapping typography—combined with a massive contrast between high-fashion display type and grounded, utilitarian body text. The layout should feel like a premium culinary magazine: spacious, confident, and deeply sensory.

---

## 2. Colors
Our palette is rooted in the rich soils and volcanic terrains of the Andes, punctuated by the vibrant, sun-drenched accents of the Colombian flag.

### The Palette (Material Design Convention)
*   **Primary (`#33210d`):** A deep, "Roasted Bean" brown used for high-authority type and hero backgrounds.
*   **Secondary (`#994621`):** A warm "Terracotta" that drives action and evokes the heat of the hearth.
*   **Surface (`#fcf9f4`):** A soft, "Clotted Cream" base that provides a premium, non-clinical background.
*   **Accents:** Muted versions of the flag colors—Tertiary (Gold/Yellow), Secondary-Container (Warm Red), and Surface-Tint (Deep Blue)—are used sparingly as "cultural spices" rather than structural elements.

### Visual Rules for Implementation
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. We define space through **Tonal Shifts**. To separate the hero from the body, transition from `surface` to `surface-container-low`.
*   **The Glass & Gradient Rule:** Use Glassmorphism for floating navigation bars or promotional overlays. Apply a `surface` color at 70% opacity with a `24px` backdrop-blur. 
*   **Signature Textures:** For primary CTAs, use a subtle radial gradient from `primary` (`#33210d`) to `primary_container` (`#4b3621`) to give buttons a "fired clay" depth.

---

## 3. Typography
The typography system is a dialogue between the modern Colombian diaspora and traditional roots.

*   **Display & Headlines (Epilogue):** This is our "Editorial Voice." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero moments. It feels architectural and grounded.
*   **Body & Labels (Work Sans):** Our "Functional Voice." Work Sans provides a clean, highly legible counterpoint to the weight of Epilogue. 
*   **Hierarchy Note:** Use `headline-sm` in all-caps with increased letter-spacing (+0.1em) for category headers to evoke the feel of high-end food packaging labels.

---

## 4. Elevation & Depth
In this design system, depth is organic, not artificial. We shun the "floating box" look of 2010s UI.

*   **The Layering Principle:** Stacking determines importance. Place a `surface-container-lowest` card (Pure White) onto a `surface-container` background to create a "paper-on-stone" effect.
*   **Ambient Shadows:** If a card must float, use a "Soil Shadow": 
    *   *Color:* `on-surface` (`#1c1c19`) at 5% opacity.
    *   *Blur:* 40px.
    *   *Spread:* -10px. 
    This creates a soft, ambient glow rather than a harsh drop-shadow.
*   **The "Ghost Border":** For input fields or cards on high-brightness surfaces, use `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons (The "Tierra" Series)
*   **Primary:** `primary` background, `on-primary` text. `ROUND_EIGHT` (0.5rem) corners. No border.
*   **Secondary:** `outline` ghost button with a `15%` opacity fill of `secondary_fixed_dim`. 
*   **Interactions:** On hover, primary buttons should shift to `primary_container` with a subtle `2px` vertical lift.

### Product Cards
*   **Constraint:** No borders, no dividers.
*   **Structure:** Use a `surface-container-low` background for the image container and a `surface` background for the text area below. This "split-tone" card style creates hierarchy without lines.

### Inputs & Forms
*   **Vibe:** Minimalist. Use a `surface-container-highest` bottom-only border (2px) that transforms into a `secondary` (Terracotta) border upon focus.

### The "Sabor" Chip
*   **Usage:** For flavor profiles (e.g., "Fruity," "Nutty").
*   **Style:** `tertiary_fixed` background with `on_tertiary_fixed` text. These small pops of color represent the vibrance of Colombian ingredients.

### Navigation (The Floating Lintel)
*   A centered, floating dock using the **Glassmorphism Rule**. It should sit at the bottom of the viewport on mobile, mirroring high-end editorial apps.

---

## 6. Do's and Don'ts

### Do
*   **DO** use whitespace as a luxury. A product should feel like an artifact in a museum, not a line item in a ledger.
*   **DO** use "staggered" image heights in grids to mimic the uneven, rustic beauty of a Colombian market.
*   **DO** apply `ROUND_EIGHT` (0.5rem) consistently to all containers to maintain the "soft-hearth" welcoming vibe.

### Don't
*   **DON'T** use pure black (`#000000`). Our darkest color is the rich coffee brown of `primary`.
*   **DON'T** use 1px dividers to separate list items. Use a 16px or 24px gap (Vertical White Space) instead.
*   **DON'T** use vibrant, saturated primary colors. Even the flag accents (Yellow, Blue, Red) must be muted and "earth-stained" to fit the premium aesthetic.