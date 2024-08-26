import { fixture, html } from '@open-wc/testing-helpers';
import { CenterClass } from '../path/to/CenterClass';
import { expect } from '@open-wc/testing';

describe('CenterClass', () => {
  it('renders with default properties', async () => {
    const el = await fixture<CenterClass>(html`<center-l></center-l>`);

    // Test default max-width and text-align properties
    expect(el.style.maxWidth).to.equal('var(--measure)');
    expect(el.style.textAlign).to.equal('initial');

    // Test that intrinsic defaults to false
    expect(el.intrinsic).to.be.false;
    expect(el.style.display).to.equal('block');
  });

  it('applies max, andText, and gutters correctly', async () => {
    const el = await fixture<CenterClass>(
      html`<center-l max="60ch" andText gutters="20"></center-l>`,
    );

    // Check styles applied via properties
    expect(el.style.maxWidth).to.equal('60ch');
    expect(el.style.textAlign).to.equal('center');
    expect(el.style.paddingInlineStart).to.equal('20px');
    expect(el.style.paddingInlineEnd).to.equal('20px');
  });

  it('sets intrinsic layout correctly', async () => {
    const el = await fixture<CenterClass>(
      html`<center-l intrinsic></center-l>`,
    );

    // Check that intrinsic styling is applied
    expect(el.style.display).to.equal('flex');
    expect(el.style.justifyContent).to.equal('center');
    expect(el.style.alignItems).to.equal('center');
  });

  it('reflects attribute changes to properties', async () => {
    const el = await fixture<CenterClass>(html`<center-l></center-l>`);

    // Update attributes
    el.setAttribute('andText', 'true');
    el.setAttribute('gutters', '30');
    await el.updateComplete;

    // Check if the styles reflect the changes
    expect(el.style.textAlign).to.equal('center');
    expect(el.style.paddingInlineStart).to.equal('30px');
    expect(el.style.paddingInlineEnd).to.equal('30px');
  });
});
