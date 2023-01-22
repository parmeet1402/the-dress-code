// ALl functions in this file provide a way for React Component to connect with Firebase services

import {
  addCreatorDoc,
  addUserDoc,
  getAllCreators,
  getCreatorById,
  getUserByEmail,
} from "./service";

export const getAllContentCreatorsAndFindWhetherAnyoneIsFavourite =
  async () => {
    const snapshot = await getAllCreators();
    const creators = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      creators.push({ ...data, id: doc.id });
    });
    return { creators };
  };

export const getSingleCreatorInformation = async id => {
  const snapshot = await getCreatorById(id);
  const data = snapshot.data();
  return { ...data, id };
};

export const addNewCreator = async obj => {
  // Validate if require....
  await addCreatorDoc(obj);
  return { status: "success" };
};

export const getIsUserAlreadyCreated = async emailId => {
  const snapshot = await getUserByEmail(emailId);
  const users = [];
  snapshot.forEach(doc => {
    const userData = doc.data();
    users.push({ ...userData, id: doc.id });
  });

  if (users.length === 0) {
    return false;
  }
  return true;
};

export const createUser = async userObj => {
  await addUserDoc(userObj);
  //
  return { status: "success" };
};

export const getUser = async emailId => {
  const snapshot = await getUserByEmail(emailId);
  const users = [];
  snapshot.forEach(doc => {
    const userData = doc.data();
    users.push({ ...userData, id: doc.id });
  });

  return users[0];
};
