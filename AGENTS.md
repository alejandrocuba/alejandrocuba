# Web Quality Standards Checklist

This project follows strict web quality standards for SEO, Accessibility, Performance, and Security. All future changes should adhere to these rules.

## 1. SEO (Search Engine Optimization)
- [ ] **Sitemap**: Keep `public/sitemap.xml` updated. Update `<lastmod>` on significant content changes.
- [ ] **Robots**: Ensure `public/robots.txt` points to the sitemap.
- [ ] **Metadata**: Update `sources/html/_layout/resources/metadata.pug` with social tags (OG/Twitter) and unique titles.
- [ ] **Headings**: Ensure every page has exactly one `<h1>`.

## 2. Accessibility (A11y)
- [ ] **Semantic HTML**: Use proper tags (`main`, `footer`, `nav`).
- [ ] **Skip Link**: Maintain the skip-to-content link in `base.pug`.
- [ ] **Images**: All images (including background images on divs) must have `alt` or `aria-label`.
- [ ] **Language**: Use `lang` attributes for content in languages other than English (e.g., `lang="es"` for Spanish).
- [ ] **Contrast**: Maintain a minimum 4.5:1 contrast ratio for all text.

## 3. Performance
- [ ] **Preconnect**: Use `preconnect` hints in `styles.pug` for external CDNs and fonts.
- [ ] **HTTPS**: Always use absolute `https://` URLs for external assets.
- [ ] **Font Display**: Always use `&display=swap` for Google Fonts.
- [ ] **Images**: Use WebP format where possible and ensure images are optimized (compressed).

## 4. Security
- [ ] **Headers**: Maintain security headers in `firebase.json` (CSP, X-Frame-Options, X-Content-Type-Options).
- [ ] **CSP**: If adding new external scripts, update the `Content-Security-Policy` header.
- [ ] **HTTPS**: Ensure the site is served over HTTPS (handled by Firebase).

## 5. Maintenance
- [ ] **Copyright**: The year in `sources/html/_components/footer.pug` is automated. Ensure the build process correctly renders the current year.
