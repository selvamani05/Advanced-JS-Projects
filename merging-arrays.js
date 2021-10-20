// Using for-loop
console.log('**** 1. Using for-loop ****');
{
    let merge = (first, second) => {
        for (let i = 0; i < second.length; i++) {
            first.push(second[i]);
        }

        return first;
    };

    let merged = merge([1, 2, 3], [4, 5, 6]);
    console.log(`merged using for loop is ${JSON.stringify(merged)}`);

    merged = merge(merge([1, 2, 3], [4, 5, 6]), [7, 8, 9]);
    console.log(`merged using for loop: ${JSON.stringify(merged)}`);
}

// Using Spread Operator
console.log('**** 2. Using Spread Operator ****');
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    // Merge arrays
    let merged = [...arr1, ...arr2];

    console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
    console.log(`input array ${JSON.stringify(arr2)}`); // [4,5,6]
    console.log(`merged using spread operator: ${JSON.stringify(merged)}`); // [1,2,3,4,5,6]


    // let merged = [...arr1, ...arr2, ...arr3];
}

// Using the concat() method
console.log('**** 3. Using concat() Method ****');
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    // Merge arrays
    let merged = arr1.concat(arr2);

    console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
    console.log(`input array ${JSON.stringify(arr2)}`); // [4,5,6]
    console.log(`merged using concat() method: ${JSON.stringify(merged)}`); // [1,2,3,4,5,6]


    // let merged = [].concat(arr1, arr2);
}

// Spread vs Concat
console.log('**** 3a. Spread vs Concat ****');
{
    let arr1 = [1, 2, 3];
    let name = 'Tapas';

    console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
    console.log(`input string ${name}`); // [4,5,6]

    const mergedUsingSpread = [...arr1, ...name];
    const mergedUsingConcat = arr1.concat(name);

    console.log(`mergedUsingSpread: ${JSON.stringify(mergedUsingSpread)}`);
    console.log(`mergedUsingConcat: ${JSON.stringify(mergedUsingConcat)}`);
}

// Using push() method
console.log('**** 4. Using push() Method ****');
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    // Merge arrays
    let merged = arr1.push(...arr2);

    console.log(`merged using push() method: input array array1 changed to: ${JSON.stringify(arr1)}`); // [1,2,3]
    console.log(`input array array2 dodn't change: ${JSON.stringify(arr2)}`); // [4,5,6]

    arr1 = [1, 2, 3];
    arr2 = [4, 5, 6];
    arr3 = [7, 8, 9];

    // Merge arrays
    arr1.push(...[...arr2, ...arr3]);
}

// Using reduce() method
console.log('**** 5. Using reduce() Method ****');
{
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6];

    let merged = arr2.reduce((arr = [], item) => {
        arr.push(item);
        return arr;
    }, arr1);

    console.log(`input array ${JSON.stringify(arr1)}`); // [1,2,3]
    console.log(`input array ${JSON.stringify(arr2)}`); // [4,5,6]
    console.log(`merged using reduce() method: ${JSON.stringify(merged)}`); // [1,2,3,4,5,6]
}

console.log('22-array-filter-sort-map');

// Filter the array of students with Higest Ranking, Sort on Ranking, finally Show the Names 

const studentsArray = [
    { name: 'Suraj', year: 2019, ranking: 4 },
    { name: 'Amit', year: 2019, ranking: 5 },
    { name: 'Akash', year: 2018, ranking: 4 },
    { name: 'Dinanath', year: 2019, ranking: 7 },
    { name: 'Sagar', year: 2017, ranking: 3 },
]

console.log('Higest Rank Holders:',
    studentsArray
        .filter(student => student.year === 2019 && student.ranking >= 5)
        .sort((n1, n2) => n1.ranking - n2.ranking)
        .reverse()
        .map(student => student.name)
);

// Create a function which returns the maximum ie. largest number from an array

console.log('21-array-get-max-largest-number');

// approach 1
/* 
function getLargestNumber(arrayToSearch) {
  if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';
  let largetNumber = arrayToSearch[0];
  for (let i = 1; i < arrayToSearch.length; i++) {
    if (arrayToSearch[i] > largetNumber) {
      largetNumber = arrayToSearch[i];
    }
  }
  return largetNumber;
} 
const versionArray = [5, 2, 3, 4, 7];
const largestVersion = (getLargestNumber(versionArray));
console.log('largestVersion: ', largestVersion);
console.log('---------');
const ageArray = [21, 25, 22, 25, 30, 25, 30];
const maxAge = (getLargestNumber(ageArray));
console.log('maxAge: ', maxAge); */

// approach 2 

function getLargestNumber(arrayToSearch) {
    if (arrayToSearch.length <= 0) return 'Array is Empty! Nothing to search!!';

    return arrayToSearch.reduce((largetNumber, curentSearchElement) => {
        return (curentSearchElement > largetNumber) ? curentSearchElement : largetNumber;
    })
}

const versionArray = [5, 2, 3, 4, 7];
const largestVersion = (getLargestNumber(versionArray));
console.log('largestVersion: ', largestVersion);

console.log('---------');

const ageArray = [21, 25, 22, 25, 30, 25, 30];
const maxAge = (getLargestNumber(ageArray));
console.log('maxAge: ', maxAge);


// Create a function which counts the search occurances from an array

console.log('20-array-count-search-occurances');

// approach 1
/* function countSearchOccurances(arrayToSearch, elementsToSearch) {
  // console.log('arrayToSearch: ', arrayToSearch);
  // console.log('elementsToSearch: ', elementsToSearch);
  let count = 0;
  for(let curElement of arrayToSearch) {
    if(curElement === elementsToSearch) {
      count++;
    }
  }
  // console.log('search count:', count);
  return count;
} */

// approach 2 
function countSearchOccurances(arrayToSearch, elementsToSearch) {

    return arrayToSearch.reduce((countAccumulator, curentSearchElement) => {
        let countOccurances = (curentSearchElement === elementsToSearch) ? 1 : 0;
        // console.log('countAccumulator', countAccumulator, 'arrayToSearch', arrayToSearch, 'elementsToSearch', elementsToSearch,);
        return countAccumulator + countOccurances;
    }, 0)
}

const versionArray = [1, 2, 5, 7, 2];
const versionCount = (countSearchOccurances(versionArray, 2));
console.log('versionCount: ', versionCount);

console.log('---------');

const ageArray = [21, 25, 22, 25, 30, 25, 30];
const ageCount = (countSearchOccurances(ageArray, -25));
console.log('ageCount: ', ageCount);