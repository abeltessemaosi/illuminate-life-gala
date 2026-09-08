export interface GalleryImage {
  id: string;
  caption: string;
  category: 'arrivals' | 'reception' | 'honorees' | 'band';
  seed: string;
  image?: string;
  focus?: string;
  gettyId?: string;
}

// Free-license (Pexels) gala-themed stock photography. Only used now for the
// four official 2024 honorees pending their cleared photos (see Website
// Package brief, Section 6.1 / Appendix A3). Every other entry below is a
// real, licensed Arnold Turner / Getty Images photo from the event.
const PLACEHOLDER_PHOTOS_BY_CATEGORY: Record<GalleryImage['category'], number[]> = {
  arrivals: [38507931, 38507941, 9439259, 38507937, 38507933, 35170088, 7594122],
  reception: [35042461, 38446275, 12689009, 16935912, 4717550, 35042459, 16120251],
  honorees: [35042467, 35042465, 16935897],
  band: [12689009, 35042467, 38446275],
};

export function getPlaceholderImageUrl(img: GalleryImage, index: number, width = 800): string {
  const pool = PLACEHOLDER_PHOTOS_BY_CATEGORY[img.category];
  const id = pool[index % pool.length];
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;
}

// Official 2024 honoree roster (Website Package brief, Section 6.1 / Appendix A).
// Do not edit captions here — pending Executive Director confirmation
// (Rowles/Rawles spelling; Eromo's place in the Achieve Brain and Spine list).
// Honoree photos (g2-g4) stay on placeholder stock until cleared images arrive.
export const galleryImages: GalleryImage[] = [
  { id: 'g1', caption: 'Dr. Jackie Rowles, 2024 Honoree', category: 'honorees', seed: 'ilg-rowles', image: '/gallery/honoree-jackie-rowles.jpg', focus: 'top', gettyId: '2188144671' },
  // Stand-in only: Dr. Eromo is one of five physicians recognized here, and
  // the only one with a cleared photo so far — pending Host confirmation on
  // his inclusion in this record (Section 10, ref 6.1). Swap for the actual
  // team/group photo once supplied.'
  { id: 'g84', caption: 'Dr. Ersno Eromo at the reception', category: 'reception', seed: 'ilg-r84', image: '/gallery/reception-eromo-solo-2.jpg', gettyId: '2188143324' },

  { id: 'g2', caption: 'Achieve Brain and Spine, Organization Honoree', category: 'honorees', seed: 'ilg-abs', image: '/gallery/reception-eromo-solo.jpg', gettyId: '2188143710' },
  { id: 'g3', caption: 'Metasebia Ketsela, accepted by Dan Teshome', category: 'honorees', seed: 'ilg-ketsela' },
  { id: 'g4', caption: 'Jeffrey Cunningham, 2024 Honoree', category: 'honorees', seed: 'ilg-cunningham' },
  { id: 'g6', caption: 'Dr. Lindsey Ross, Dr. Jennifer Harris, and Dr. Natalie Gilmore', category: 'reception', seed: 'ilg-ross', image: '/gallery/reception-ross-harris-gilmore.jpg', gettyId: '2188144342' },
  // { id: 'g7', caption: 'Dr. Jennifer Harris', category: 'reception', seed: 'ilg-harris', image: '/gallery/reception-ross-harris-gilmore.jpg', gettyId: '2188144342' },
  { id: 'g8', caption: 'Kyle & Cathy Johnson', category: 'arrivals', seed: 'ilg-johnson', image: '/gallery/arrivals-johnson.jpg', focus: 'top', gettyId: '2188143664' },
  { id: 'g9', caption: 'Jason & Jennifer Edmonds', category: 'arrivals', seed: 'ilg-edmonds', image: '/gallery/arrivals-edmonds.jpg', focus: 'top', gettyId: '2188143654' },
  { id: 'g11', caption: 'Members of Top Shelf', category: 'band', seed: 'ilg-topshelf-2', image: '/gallery/band-topshelf-3.jpg', gettyId: '2188143703' },
  { id: 'g14', caption: 'Jason & Annie Veris', category: 'arrivals', seed: 'ilg-veris', image: '/gallery/arrivals-veris.jpg', focus: 'top', gettyId: '2188143627' },
  { id: 'g15', caption: 'Francisco Durazo and Deborah Shelton', category: 'reception', seed: 'ilg-shelton', image: '/gallery/reception-durazo-shelton.jpg', focus: 'top', gettyId: '2188143647' },
  { id: 'g17', caption: 'Dr. Ersno Eromo, Collins Eromo, and Miguel Nuñez', category: 'arrivals', seed: 'ilg-a17', image: '/gallery/arrivals-eromo-nunez.jpg', focus: 'top', gettyId: '2188144699' },
  { id: 'g19', caption: 'Food service during the reception', category: 'reception', seed: 'ilg-r19', image: '/gallery/reception-food.jpg', gettyId: '2188144371' },
  { id: 'g20', caption: 'Nicole Alexandra at the reception', category: 'reception', seed: 'ilg-r20', image: '/gallery/reception-nicole-alexandra.jpg', focus: 'top', gettyId: '2188143676' },
  { id: 'g21', caption: 'Matt Skillman at cocktail hour', category: 'reception', seed: 'ilg-r21', image: '/gallery/reception-skillman.jpg', focus: 'top', gettyId: '2188143644' },
  { id: 'g22', caption: 'Cyrus The Great on the red carpet', category: 'arrivals', seed: 'ilg-a22', image: '/gallery/arrivals-cyrus.jpg', focus: 'top', gettyId: '2188143633' },
  { id: 'g23', caption: 'Cyrus The Great, Yemane G, and Lane Harrison', category: 'reception', seed: 'ilg-r23', image: '/gallery/reception-cyrus-yemane-lane.jpg', gettyId: '2188143625' },
  { id: 'g24', caption: 'Antoine & Natalie Carre', category: 'reception', seed: 'ilg-r24', image: '/gallery/reception-carre.jpg', gettyId: '2188143589' },
  { id: 'g26', caption: 'Bret & Joanne Hadley with Cynthia & John Bartlett', category: 'reception', seed: 'ilg-r26', image: '/gallery/reception-hadley-bartlett.jpg', gettyId: '2188143618' },
  { id: 'g27', caption: 'Jason & Lindsey Willock arrive', category: 'arrivals', seed: 'ilg-a27', image: '/gallery/arrivals-willock.jpg', focus: 'top', gettyId: '2188143563' },
  { id: 'g28', caption: 'Matt & Mojan Sabrkhani', category: 'reception', seed: 'ilg-r28', image: '/gallery/reception-sabrkhani.jpg', focus: 'top', gettyId: '2188143555' },
  { id: 'g29', caption: 'Mark & Beata Mandell', category: 'reception', seed: 'ilg-r29', image: '/gallery/reception-mandell.jpg', focus: 'top', gettyId: '2188143542' },
  { id: 'g30', caption: 'Miguel Nuñez & Sofie Mamo', category: 'reception', seed: 'ilg-h30', image: '/gallery/reception-nunez-mamo.jpg', focus: 'top', gettyId: '2188143523' },
  { id: 'g31', caption: 'Sofie Mamo at the reception', category: 'reception', seed: 'ilg-h31', image: '/gallery/reception-sofie-mamo.jpg', focus: 'top', gettyId: '2188143519' },
  { id: 'g44', caption: 'Members of Top Shelf', category: 'band', seed: 'ilg-b44', image: '/gallery/band-topshelf-1.jpg', gettyId: '2188143689' },
  { id: 'g45', caption: 'Members of Top Shelf', category: 'band', seed: 'ilg-b45', image: '/gallery/band-topshelf-2.jpg', gettyId: '2188143701' },
  { id: 'g46', caption: 'Dr. Natalie Gilmore at the reception', category: 'reception', seed: 'ilg-h46', image: '/gallery/reception-natalie-gilmore.jpg', focus: 'top', gettyId: '2188144340' },
  { id: 'g47', caption: 'Dr. Phil Westbrook at the reception', category: 'reception', seed: 'ilg-h47', image: '/gallery/reception-phil-westbrook.jpg', focus: 'top', gettyId: '2188144227' },
  { id: 'g49', caption: 'Kelsey Rowles at the reception', category: 'reception', seed: 'ilg-r49', image: '/gallery/reception-kelsey-rowles.jpg', focus: 'top', gettyId: '2188143679' },
  { id: 'g50', caption: 'Kelsey Rowles and Dr. Jackie Rowles', category: 'reception', seed: 'ilg-r50', image: '/gallery/reception-kelsey-jackie-rowles.jpg', focus: 'top', gettyId: '2188143680' },
  { id: 'g51', caption: 'Guests at the reception', category: 'reception', seed: 'ilg-r51', image: '/gallery/reception-guests-generic.jpg', gettyId: '2188144232' },
  { id: 'g52', caption: 'Illuminate Life Gala signage', category: 'reception', seed: 'ilg-a52', image: '/gallery/reception-signage.jpg', gettyId: '2188143716' },
  { id: 'g54', caption: 'Tyaka Washingon, Denise Johnson, Laurice Haycraft, and Cheri Hayes', category: 'reception', seed: 'ilg-r54', image: '/gallery/reception-washingon-johnson-haycraft-hayes.jpg', focus: 'top', gettyId: '2188143662' },
  { id: 'g56', caption: 'Dr. Ersno Eromo at the reception', category: 'reception', seed: 'ilg-r56', image: '/gallery/reception-eromo-solo.jpg', gettyId: '2188143710' },
  { id: 'g57', caption: 'Collins Eromo speaks onstage', category: 'reception', seed: 'ilg-r57', image: '/gallery/reception-collins-eromo-stage.jpg', focus: 'top', gettyId: '2188144472' },
  { id: 'g59', caption: 'Collins Eromo, Dr. Ersno Eromo, and Heather Richmond speak onstage', category: 'reception', seed: 'ilg-r59', image: '/gallery/reception-eromo-family-stage.jpg', focus: 'top', gettyId: '2188144522' },

  { id: 'g61', caption: 'Yvette Nowry', category: 'reception', seed: 'ilg-r61', image: '/gallery/reception-nowry.jpg', focus: 'top', gettyId: '2188143276' },
  { id: 'g62', caption: 'Ailene & Boian Costello', category: 'reception', seed: 'ilg-r62', image: '/gallery/reception-costello.jpg', focus: 'top', gettyId: '2188143278' },
  { id: 'g63', caption: 'Alex Harris & Raquel Sanches', category: 'reception', seed: 'ilg-r63', image: '/gallery/reception-harris-sanches.jpg', gettyId: '2188143189' },
  { id: 'g64', caption: 'Christina & Evgeni Ellmers', category: 'reception', seed: 'ilg-r64', image: '/gallery/reception-ellmers.jpg', focus: 'top', gettyId: '2188143471' },
  { id: 'g65', caption: 'Kim Cunningham, Jeffrey Cunningham, and Miguel Nuñez', category: 'reception', seed: 'ilg-r65', image: '/gallery/reception-cunningham-nunez.jpg', focus: 'top', gettyId: '2188143466' },
  { id: 'g66', caption: 'Dawn & Peter Rockwood', category: 'reception', seed: 'ilg-r66', image: '/gallery/reception-rockwood.jpg', focus: 'top', gettyId: '2188143447' },
  { id: 'g67', caption: 'Dagñea Teshome', category: 'reception', seed: 'ilg-r67', image: '/gallery/reception-teshome.jpg', focus: 'top', gettyId: '2188143444' },
  { id: 'g68', caption: 'Nick & Holly Ashley', category: 'reception', seed: 'ilg-r68', image: '/gallery/reception-ashley.jpg', focus: 'top', gettyId: '2188143420' },
  { id: 'g69', caption: 'Scott & Susan Northrop', category: 'reception', seed: 'ilg-r69', image: '/gallery/reception-northrop.jpg', focus: 'top', gettyId: '2188143411' },
  { id: 'g70', caption: 'Wate & Sarah Carter', category: 'reception', seed: 'ilg-r70', image: '/gallery/reception-carter.jpg', focus: 'top', gettyId: '2188143400' },
  { id: 'g71', caption: 'Wate & Sarah Carter with Hunter Rock', category: 'reception', seed: 'ilg-r71', image: '/gallery/reception-carter-rock.jpg', focus: 'top', gettyId: '2188143396' },
  { id: 'g72', caption: 'Hunter Rock', category: 'reception', seed: 'ilg-r72', image: '/gallery/reception-hunter-rock.jpg', focus: 'top', gettyId: '2188143383' },
  { id: 'g73', caption: 'Sedi Shyne & Sofi Mamo', category: 'reception', seed: 'ilg-r73', image: '/gallery/reception-shyne-mamo.jpg', focus: 'top', gettyId: '2188143377' },
  { id: 'g74', caption: 'Wesley Schwartz', category: 'reception', seed: 'ilg-r74', image: '/gallery/reception-schwartz.jpg', focus: 'top', gettyId: '2188143360' },
  { id: 'g75', caption: 'Alison Law', category: 'reception', seed: 'ilg-r75', image: '/gallery/reception-alison-law.jpg', gettyId: '2188143349' },
  { id: 'g76', caption: 'Lizbeth Vázquez', category: 'reception', seed: 'ilg-r76', image: '/gallery/reception-vazquez.jpg', focus: 'top', gettyId: '2188143299' },
  { id: 'g77', caption: 'Jeremiah Ingrassia', category: 'reception', seed: 'ilg-r77', image: '/gallery/reception-ingrassia.jpg', focus: 'top', gettyId: '2188143298' },
  { id: 'g78', caption: 'Miguel Nuñez', category: 'reception', seed: 'ilg-r78', image: '/gallery/reception-nunez-solo.jpg', focus: 'top', gettyId: '2188143505' },
  { id: 'g79', caption: 'Dr. Ersno Eromo and Sofi Moma', category: 'reception', seed: 'ilg-r79', image: '/gallery/reception-eromo-sofi-moma.jpg', focus: 'top', gettyId: '2188143329' },
  { id: 'g80', caption: 'Heather Richmond and Dr. Ersno Eromo', category: 'reception', seed: 'ilg-r80', image: '/gallery/reception-heather-eromo.jpg', focus: 'top', gettyId: '2188143317' },
  { id: 'g81', caption: 'Caroline & David Azouz', category: 'reception', seed: 'ilg-r81', image: '/gallery/reception-azouz.jpg', focus: 'top', gettyId: '2188143598' },
  { id: 'g82', caption: 'Heather Richmond and Jeremiah Ingrassia', category: 'reception', seed: 'ilg-r82', image: '/gallery/reception-heather-ingrassia.jpg', gettyId: '2188143306' },
  { id: 'g83', caption: 'Lizbeth Vázquez, Sedi Shyne, Dr. Ersno Eromo, Heather Richmond, and Sofi Moma', category: 'reception', seed: 'ilg-r83', image: '/gallery/reception-vazquez-shyne-eromo-heather-moma.jpg', gettyId: '2188143314' },
  { id: 'g85', caption: 'Guests attend the Illuminate Life Gala', category: 'reception', seed: 'ilg-r85', image: '/gallery/reception-guests-193.jpg', gettyId: '2188143193' },
  { id: 'g86', caption: 'Guests attend the Illuminate Life Gala', category: 'reception', seed: 'ilg-r86', image: '/gallery/reception-guests-198.jpg', gettyId: '2188143198' },
  { id: 'g87', caption: 'Guests attend the Illuminate Life Gala', category: 'reception', seed: 'ilg-r87', image: '/gallery/reception-guests-199.jpg', gettyId: '2188143199' },
  { id: 'g88', caption: 'Guests attend the Illuminate Life Gala', category: 'reception', seed: 'ilg-r88', image: '/gallery/reception-guests-203.jpg', gettyId: '2188143203' },
  { id: 'g89', caption: 'Guests attend the Illuminate Life Gala', category: 'reception', seed: 'ilg-r89', image: '/gallery/reception-guests-204.jpg', gettyId: '2188143204' },
  { id: 'g90', caption: 'Guests attend the Illuminate Life Gala', category: 'reception', seed: 'ilg-r90', image: '/gallery/reception-guests-206.jpg', gettyId: '2188143206' },
];

// Only entries with a real cropped photo render, plus the pending official
// honorees (g2-g4), which intentionally stay on placeholder stock until
// their cleared images arrive (Section 6.1 / Appendix A3).
export function getVisibleGalleryImages(): GalleryImage[] {
  return galleryImages.filter((img) => img.image || img.category === 'honorees');
}

export function getAltText(img: GalleryImage): string {
  return `${img.caption} at the 2024 Illuminate Life Gala`;
}
