let id = 1;

function createUserProfiles(names, modifiedNames) {
  return names.map((name, index) => {
    return {
      originalName: name,
      modifiedName: modifiedNames[index],
      id: id++
    };
  });
}

const names = ['Frederick', 'Franklina', 'Bryan', 'Kellerman', 'Soldier'];
const modifiedNames = ['frederick', 'FRANKLINA', 'bryan', 'KELLERMAN', 'soldier'];
const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);