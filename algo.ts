// 1. Growth with respect to the input
// 2. Constants are dropped
// 3. Worst case is usually the way we measure efficiency

// Common Complexities
// 0(1) Constant - no loops
// 0(log N) Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search) Log = Base 2
// 0(n) Linear - for loops, while loops through n items
// 0(n log(n)) Log Linear - usually sorting operations
// 0(n^2) Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
// 0(2^n) Exponential - recursive algorithms that solves a problem of size N
// 0(n!) Factorial - you are adding a loop for every element

// Iterating through half a collection is still 0(n)
// Two separate collections: 0(a * b)

// Still 0(n) but now we have a break condition that will stop the loop early if the charCode is 69. 
// This is a good example of how we can improve our algorithms by adding break conditions.
function sumChars(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        const charCode = n.charCodeAt(i);
        if (charCode === 69) return sum;
        sum += charCode;    
    };
    return sum;
};

// console.log(sumChars("Elijiah"));

// 0(n^2) 2 = # of nested Loops
function sumCharCodes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += n.charCodeAt(i) + n.charCodeAt(j);
        };
    };
    return sum;
};

// console.log(sumCharCodes("Elijiah"));

// 0(a * b) = # of separate collections
function sumCharCodes2(n: string, m: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        sum += n.charCodeAt(i);
    };
    for (let j = 0; j < m.length; ++j) {
        sum += m.charCodeAt(j);
    };
    return sum;
};

// console.log(sumCharCodes2("Elijiah", "Elijiah"));

// 0(log n) - Logarithmic like Binary Search
// 0(n log n) - Linearithmic like Quicksort, Merge Sort
// 0(n!) - Factorial like the Traveling Salesman
// 0(sqrt(n)) - Square Root like the Sieve of Eratosthenes

// Arrays
// Contiguous memory space / collection
// Array Buffer
// const a = new ArrayBuffer(6);
// console.log(a);
// const a8 = new Uint8Array(a);
// a8[0] = 45;
// console.log(a)
// a8[2] = 45;
// console.log(a);
// const a16 = new Uint16Array(a);
// a16[2] = 0x4545;
// console.log(a);  

// Linear Search 0(n)
function linearSearch(haystack: number[], needle: number): boolean {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle) return true;
    };
    return false;
};
// console.log(linearSearch([1, 2, 3, 4, 5], 3));

// If the inputhalves at each step, it's likely 0(log n) or 0(n log n)

// Binary Search N / 2^k = 1 => k = log N || 0(log n)
function binarySearch(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;
    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];
        if (v === needle) {
            return true;
        } else if (v > needle) { // Smaller half on the left
            console.log(`Smaller half on the left: ${haystack.slice(lo, hi)}`)
            hi = m;
        } else { // Larger half on the right
            console.log(`Larger half on the right: ${haystack.slice(lo, hi)}`)
            lo = m + 1;
        };
    } while (lo < hi)
    return false;
};
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 12));

function twoCrystalBalls(breaks: boolean[]): number {
    const jump = Math.floor(Math.sqrt(breaks.length));
    let i = jump;

    for (; i < breaks.length; i += jump) {
        console.log(`i: ${i}`);
        // Check for breaks in 'true' to find the first break
        if (breaks[i]) {
            break;
        };
    };
    // Walk back a jump and then walk forward until we find a break
    i -= jump;

    for (let j = 0; i < jump && i < breaks.length; ++j) {
        console.log(`j: ${j}, i: ${i}`)
        // Check for breaks in 'true' to find the first break
        if (breaks[i]) {
            return i;
        };
    };
    return -1;
};

// console.log(twoCrystalBalls([false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true]));

// Bubble Sort -- Any X sub i is less than or equal to X sub i + 1
// In a single iteration, the largest element will bubble to the end of the array
// 1 .. 100 || (n + 1) * n / 2 = 5050. 0(n^2) !!!
function bubbleSort(arr: number[]): number[] {
    // let swapped: boolean;
    // do {
    //     swapped = false;
    //     for (let i = 0; i < arr.length; ++i) {
    //         if (arr[i] > arr[i + 1]) {
    //             const tmp = arr[i];
    //             console.log(`Swapping ${arr[i]} and ${arr[i + 1]}`)
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = tmp;
    //             swapped = true;
    //         };
    //     };
    // } while (swapped);
    // return arr;
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                console.log(`Swapping ${arr[j]} and ${arr[j + 1]}`)
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            };
        };
    };
    return arr;
};
// console.log(bubbleSort([1, 10, 2, 4, 7, 5, 6, 8, 9, 3]));

// Linked List Data Structures
// Insertion and Deletion are 0(1)
class LinkNode<T> {
    value: number;
    next?: LinkNode<T>;
    prev?: LinkNode<T>;

    constructor(value: number) {
        this.value = value;
    };
};