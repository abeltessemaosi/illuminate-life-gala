export interface GalleryImage {
  id: string;
  caption: string;
  category: 'arrivals' | 'reception' | 'honorees' | 'band';
  seed: string;
}

// Placeholder imagery pending the licensed 2024 photography set.
export const galleryImages: GalleryImage[] = [
  { id: 'g1', caption: 'Dr. Jackie Rowles, 2024 Honoree', category: 'honorees', seed: 'ilg-rowles' },
  { id: 'g2', caption: 'Achieve Brain and Spine, Organization Honoree', category: 'honorees', seed: 'ilg-abs' },
  { id: 'g3', caption: 'Metasebia Ketsela, accepted by Dan Teshome', category: 'honorees', seed: 'ilg-ketsela' },
  { id: 'g4', caption: 'Jeffrey Cunningham, 2024 Honoree', category: 'honorees', seed: 'ilg-cunningham' },
  { id: 'g5', caption: 'Heather Richmond, Executive Director', category: 'reception', seed: 'ilg-heather' },
  { id: 'g6', caption: 'Dr. Lindsey Ross', category: 'reception', seed: 'ilg-ross' },
  { id: 'g7', caption: 'Dr. Jennifer Harris', category: 'reception', seed: 'ilg-harris' },
  { id: 'g8', caption: 'Kyle & Cathy Johnson', category: 'arrivals', seed: 'ilg-johnson' },
  { id: 'g9', caption: 'Jason & Jennifer Edmonds', category: 'arrivals', seed: 'ilg-edmonds' },
  { id: 'g10', caption: 'Members of Top Shelf', category: 'band', seed: 'ilg-topshelf-1' },
  { id: 'g11', caption: 'Top Shelf performing live', category: 'band', seed: 'ilg-topshelf-2' },
  { id: 'g12', caption: 'Red carpet arrivals', category: 'arrivals', seed: 'ilg-carpet' },
  { id: 'g13', caption: 'The ballroom, inaugural gala', category: 'reception', seed: 'ilg-ballroom' },
  { id: 'g14', caption: 'Jason & Annie Veris', category: 'arrivals', seed: 'ilg-veris' },
  { id: 'g15', caption: 'Deborah Shelton', category: 'reception', seed: 'ilg-shelton' },
  { id: 'g16', caption: 'Francisco Durazo', category: 'reception', seed: 'ilg-durazo' },
];
