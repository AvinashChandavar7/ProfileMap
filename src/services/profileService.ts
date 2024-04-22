import { Profile } from "../types/types";


const mockProfiles: Profile[] = [
  {
    id: '1',
    name: 'Manoj Kumar',
    description: 'Financial Analyst',
    photoUrl: 'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    email: 'manoj.kumar@example.com',
    phone: '123-456-7890',
    address: {
      id: '1',
      street: '678 Oak St',
      city: 'Ahmedabad',
      state: 'GJ',
      zip: '380001',
      latitude: 23.0225,
      longitude: 72.5714,
    },
  },
  {
    id: '2',
    name: 'Amit Patel',
    description: 'Web Developer',
    photoUrl: 'https://www.shutterstock.com/shutterstock/photos/1708062739/display_1500/stock-photo-headshot-portrait-of-smiling-middle-aged-caucasian-businessman-in-glasses-look-at-camera-with-1708062739.jpg',
    email: 'amit.patel@example.com',
    phone: '234-567-8901',
    address: {
      id: '2',
      street: '456 Elm St',
      city: 'Mumbai',
      state: 'MH',
      zip: '400001',
      latitude: 19.0760,
      longitude: 72.8777,
    },
  },
  {
    id: '3',
    name: 'Priya Sharma',
    description: 'Data Analyst',
    photoUrl: 'https://as1.ftcdn.net/v2/jpg/05/52/15/68/1000_F_552156839_hQTIBjd35zljkgSz65pDaUUSyKK53DtZ.jpg',
    email: 'priya.sharma@example.com',
    phone: '345-678-9012',
    address: {
      id: '3',
      street: '789 Oak St',
      city: 'Delhi',
      state: 'DL',
      zip: '110001',
      latitude: 28.7041,
      longitude: 77.1025,
    },
  },
  {
    id: '4',
    name: 'Rahul Singh',
    description: 'Graphic Designer',
    photoUrl: 'https://as2.ftcdn.net/v2/jpg/03/64/21/11/1000_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg',
    email: 'rahul.singh@example.com',
    phone: '456-789-0123',
    address: {
      id: '4',
      street: '012 Pine St',
      city: 'Bangalore',
      state: 'KA',
      zip: '560001',
      latitude: 12.9716,
      longitude: 77.5946,
    },
  },
  {
    id: '5',
    name: 'Sneha Gupta',
    description: 'UI/UX Designer',
    photoUrl: 'https://via.placeholder.com/150',
    email: 'sneha.gupta@example.com',
    phone: '567-890-1234',
    address: {
      id: '5',
      street: '345 Cedar St',
      city: 'Kolkata',
      state: 'WB',
      zip: '700001',
      latitude: 22.5726,
      longitude: 88.3639,
    },
  },

  {
    id: '6',
    name: 'Anjali Verma',
    description: 'Software Engineer',
    photoUrl: 'https://via.placeholder.com/150',
    email: 'anjali.verma@example.com',
    phone: '678-901-2345',
    address: {
      id: '6',
      street: '901 Maple St',
      city: 'Chennai',
      state: 'TN',
      zip: '600001',
      latitude: 13.0827,
      longitude: 80.2707,
    },
  },
  {
    id: '7',
    name: 'Vikram Gupta',
    description: 'Product Manager',
    photoUrl: 'https://via.placeholder.com/150',
    email: 'vikram.gupta@example.com',
    phone: '789-012-3456',
    address: {
      id: '7',
      street: '234 Birch St',
      city: 'Hyderabad',
      state: 'TS',
      zip: '500001',
      latitude: 17.3850,
      longitude: 78.4867,
    },
  },
  {
    id: '8',
    name: 'Neha Reddy',
    description: 'Marketing Specialist',
    photoUrl: 'https://via.placeholder.com/150',
    email: 'neha.reddy@example.com',
    phone: '890-123-4567',
    address: {
      id: '8',
      street: '567 Walnut St',
      city: 'Pune',
      state: 'MH',
      zip: '411001',
      latitude: 18.5204,
      longitude: 73.8567,
    },
  },
  {
    id: '9',
    name: 'Rajesh Kumar',
    description: 'Software Developer',
    photoUrl: 'https://via.placeholder.com/150',
    email: 'rajesh.kumar@example.com',
    phone: '901-234-5678',
    address: {
      id: '9',
      street: '789 Cherry St',
      city: 'Jaipur',
      state: 'RJ',
      zip: '302001',
      latitude: 26.9124,
      longitude: 75.7873,
    },
  },
  {
    id: '10',
    name: 'Divya Singh',
    description: 'HR Manager',
    photoUrl: 'https://via.placeholder.com/150',
    email: 'divya.singh@example.com',
    phone: '012-345-6789',
    address: {
      id: '10',
      street: '123 Pine St',
      city: 'Lucknow',
      state: 'UP',
      zip: '226001',
      latitude: 26.8467,
      longitude: 80.9462,
    },
  },
];


export const getProfiles = async (): Promise<Profile[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockProfiles;
};

export const getProfileById = async (profileId: string): Promise<Profile | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockProfiles.find((profile) => profile.id === profileId) || null;
};

export const addProfile = async (newProfile: Profile): Promise<Profile> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  mockProfiles.push(newProfile);
  return newProfile;
};

export const updateProfile = async (updatedProfile: Profile): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = mockProfiles.findIndex(
    (profile) => profile.id === updatedProfile.id
  );

  if (index !== -1) {
    mockProfiles[index] = updatedProfile;
  }
};

export const deleteProfile = async (profileId: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = mockProfiles.findIndex(
    (profile) => profile.id === profileId
  );

  if (index !== -1) {
    mockProfiles.splice(index, 1);
  }
};