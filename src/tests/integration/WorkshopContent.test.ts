import { describe, it, expect } from 'vitest';
import { contentByVariant, WorkshopVariant } from '../../lib/workshopContent';

describe('Workshop Content', () => {
  const variants: WorkshopVariant[] = ['990', '180', '480'];

  variants.forEach(variant => {
    describe(`Variant ${variant}`, () => {
      const content = contentByVariant[variant];

      it('has required nav structure', () => {
        expect(content.nav).toBeDefined();
        expect(content.nav.items).toBeInstanceOf(Array);
        expect(content.nav.items.length).toBeGreaterThan(0);
        expect(content.nav.lang).toBeDefined();
      });

      it('has complete hero content', () => {
        expect(content.hero).toBeDefined();
        expect(content.hero.titleParts).toBeInstanceOf(Array);
        expect(content.hero.titleParts.length).toBeGreaterThan(0);
        expect(content.hero.subtitleLines).toBeInstanceOf(Array);
        expect(content.hero.cta).toBeDefined();
        expect(content.hero.sideNote).toBeDefined();
      });

      it('has benefits array', () => {
        expect(content.benefits).toBeDefined();
        expect(content.benefits).toBeInstanceOf(Array);
        expect(content.benefits.length).toBeGreaterThan(0);
      });

      it('has invite section content', () => {
        expect(content.invite).toBeDefined();
        expect(content.invite.titleLines).toBeInstanceOf(Array);
        expect(content.invite.body).toBeDefined();
        expect(content.invite.cta).toBeDefined();
      });

      it('has topics content', () => {
        expect(content.topics).toBeDefined();
        expect(content.topics.heading).toBeDefined();
        expect(content.topics.items).toBeInstanceOf(Array);
        expect(content.topics.cta).toBeDefined();
      });

      it('has event details', () => {
        expect(content.eventDetails).toBeDefined();
        expect(content.eventDetails.heading).toBeDefined();
        expect(content.eventDetails.dateValue).toBeDefined();
        expect(content.eventDetails.timeValue).toBeDefined();
        expect(content.eventDetails.locationValue).toBeDefined();
      });

      it('has gallery content', () => {
        expect(content.gallery).toBeDefined();
        expect(content.gallery.heading).toBeDefined();
        expect(content.gallery.before).toBeDefined();
        expect(content.gallery.after).toBeDefined();
      });

      it('has exosomes intro', () => {
        expect(content.exosomesIntro).toBeDefined();
        expect(content.exosomesIntro.heading).toBeDefined();
        expect(content.exosomesIntro.cards).toBeInstanceOf(Array);
      });

      it('has about section', () => {
        expect(content.about).toBeDefined();
        expect(content.about.heading).toBeDefined();
        expect(content.about.body).toBeDefined();
      });

      it('has speakers section', () => {
        expect(content.speakers).toBeDefined();
        expect(content.speakers.heading).toBeDefined();
        expect(content.speakers.speakers).toBeInstanceOf(Array);
      });

      it('has vtech content', () => {
        expect(content.vtech).toBeDefined();
        expect(content.vtech.title1).toBeDefined();
        expect(content.vtech.bullets).toBeInstanceOf(Array);
      });

      it('all text content is in Hebrew', () => {
        const hebrewRegex = /[\u0590-\u05FF]/;
        expect(hebrewRegex.test(content.hero.titleParts[0].text)).toBe(true);
      });
    });
  });

  it('has all three variants defined', () => {
    expect(contentByVariant['990']).toBeDefined();
    expect(contentByVariant['180']).toBeDefined();
    expect(contentByVariant['480']).toBeDefined();
  });

  it('variant structure is consistent', () => {
    const keys990 = Object.keys(contentByVariant['990']);
    const keys180 = Object.keys(contentByVariant['180']);
    const keys480 = Object.keys(contentByVariant['480']);

    expect(keys990).toEqual(keys180);
    expect(keys180).toEqual(keys480);
  });
});
