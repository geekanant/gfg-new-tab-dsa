const questions = [
  {
    question:
      "Given an array arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/kadanes-algorithm-1587115620/1",
    link_website: "geeksforgeeks",
    topic: "Arrays",
    input: "N = 5, arr[] = {1,2,3,-2,5}",
    output: "9",
    explanation:
      "Max subarray sum is 9 of elements (1, 2, 3, -2, 5) which is a contiguous subarray.",
  },
  {
    question: "Sort an array of 0s, 1s and 2s",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s4231/1",
    link_website: "geeksforgeeks",
    topic: "Arrays",
    input: "N = 5, arr[] = {0, 2, 1, 2, 0}",
    output: "0 0 1 2 2",
    explanation: "0s 1s and 2s are segregated into ascending order.",
  },
  {
    question: "Minimum no. of Jumps to reach end of an array	",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
    link_website: "geeksforgeeks",
    topic: "arrays",
    input: "N = 11, arr[] = {1,3,5,8,9,2,6,7,6,8,9}",
    output: "3",
    explanation: "3 is the minimum number of jumps to reach end of array.",
  },
  {
    question: "Find maximum product subarray",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/maximum-product-subarray3604/1",
    link_website: "geeksforgeeks",
    topic: "arrays",
    input: "N = 5, arr[] = {6, -3, -10, 0, 2}",
    output: "180",
    explanation: "Subarray with maximum product is 6, -3, -10 which gives 180.",
  },
  // {
  //   question: "Find whether an array is a subset of another array	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
  //   link_website: "geeksforgeeks",
  //   topic: "arrays",
  // },
  // {
  //   question: "Smallest Subarray with sum greater than a given value",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x/0",
  //   link_website: "geeksforgeeks",
  //   topic: "arrays",
  // },
  // {
  //   question:
  //     "Given a list of non negative integers, arrange them in such a manner that they form the largest number possible.The result is going to be very large, hence return the result in the form of a string.",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/largest-number-formed-from-an-array1117/1",
  //   link_website: "geeksforgeeks",
  //   topic: "arrays",
  // },
  // {
  //   question: "Find if there is any subarray with sum equal to 0.",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/subarray-with-0-sum/0",
  //   link_website: "geeksforgeeks",
  //   topic: "arrays",
  // },
  {
    question: "Rotate a matrix by 90 degrees",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/rotate-by-90-degree0356/1",
    link_website: "geeksforgeeks",
    topic: "matrix",
    input: "N = 3, matrix[][] = {{1, 2, 3},{4, 5, 6},{7, 8, 9}}",
    output: "3 6 9 2 5 8 1 4 7",
    explanation: "Matrix is rotated by 90 degree anticlockwise.",
  },
  // {
  //   question: "Check whether a String is Palindrome or not",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/check-if-strings-are-rotations-of-each-other-or-not-1587115620/1",
  //   link_website: "geeksforgeeks",
  //   topic: "strings",
  // },
  // {
  //   question:
  //     "Rearrange characters in a string such that no two adjacent are same.",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
  //   link_website: "geeksforgeeks",
  //   topic: "strings",
  // },
  // {
  //   question: "Print all the permutations of the given string	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
  //   link_website: "geeksforgeeks",
  //   topic: "strings",
  // },
  {
    question: "Count All Palindromic Subsequence in a given String.	",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
    link_website: "geeksforgeeks",
    topic: "Strings",
    input: "abbaeae",
    output: "4",
    explanation:  "Palindromic subsequence are : a, b, aa, aba"
  },
  {
    question:
      "Write a program to generate all possible valid IP addresses from given  string.",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/generate-ip-addresses/1",
    link_website: "geeksforgeeks",
    topic: "Strings",
    input: "1111",
    output: "1.1.1.1",
    explanation: "For string 1111, the  possible IP addresses are 1.1.1.1"
  },
  // {
  //   question: "Count of number of given string in 2D character array	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/count-occurences-of-a-given-word-in-a-2-d-array/1/",
  //   link_website: "geeksforgeeks",
  //   topic: "strings",
  // },
  // {
  //   question: "Check if two given strings are isomorphic to each other	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/isomorphic-strings/0",
  //   link_website: "geeksforgeeks",
  //   topic: "strings",
  // },
  // {
  //   question: "Merge 2 sorted arrays",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1",
  //   link_website: "geeksforgeeks",
  //   topic: "searchingAndSorting",
  // },
  // {
  //   question: "Write a program to Delete loop in a linked list.	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
  //   link_website: "geeksforgeeks",
  //   topic: "linkedlist",
  // },
  // {
  //   question: "Reverse a Doubly Linked list.	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1",
  //   link_website: "geeksforgeeks",
  //   topic: "linkedlist",
  // },
  // {
  //   question: "Implement 2 stack in an array",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/implement-two-stacks-in-an-array/1",
  //   link_website: "geeksforgeeks",
  //   topic: "stacks",
  // },
  // {
  //   question: "First negative integer in every window of size 'k'	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k/0",
  //   link_website: "geeksforgeeks",
  //   topic: "stacks",
  // },
  // {
  //   question: "LRU Cache Implementation	",
  //   source: "GeeksforGeeks",
  //   link_to_solve: "https://practice.geeksforgeeks.org/problems/lru-cache/1",
  //   link_website: "geeksforgeeks",
  //   topic: "stacks",
  // },
  // {
  //   question: "Implement Stack using Queue	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
  //   link_website: "geeksforgeeks",
  //   topic: "stacks",
  // },
  // {
  //   question:
  //     "Design a Stack that supports getMin() in O(1) time and O(1) extra space.	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/special-stack/1",
  //   link_website: "geeksforgeeks",
  //   topic: "stacks",
  // },
  // {
  //   question: "Implement Queue using Stack",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
  //   link_website: "geeksforgeeks",
  //   topic: "queues",
  // },
  // {
  //   question: "Find first non-repeating character in a stream.",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
  //   link_website: "geeksforgeeks",
  //   topic: "queues",
  // },
  // {
  //   question: "Find the minimum and maximum amount to buy all N candies",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0",
  //   link_website: "geeksforgeeks",
  //   topic: "greedy",
  // },
  // {
  //   question: "Greedy Algorithm to find Minimum number of Coins	",
  //   source: "GeeksforGeeks",
  //   link_to_solve: "https://practice.geeksforgeeks.org/problems/coin-piles/0",
  //   link_website: "geeksforgeeks",
  //   topic: "greedy",
  // },
  // {
  //   question: "Maximize array sum after K negations",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/maximize-sum-after-k-negations/0",
  //   link_website: "geeksforgeeks",
  //   topic: "greedy",
  // },
  // {
  //   question:
  //     "Program for Least Recently Used (LRU) Page Replacement algorithm	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
  //   link_website: "geeksforgeeks",
  //   topic: "greedy",
  // },

  // {
  //   question:
  //     "Rearrange characters in a string such that no two adjacent are same",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
  //   link_website: "geeksforgeeks",
  //   topic: "greedy",
  // },
  // {
  //   question:
  //     "Program for Least Recently Used (LRU) Page Replacement algorithm	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
  //   link_website: "geeksforgeeks",
  //   topic: "greedy",
  // },
  // {
  //   question: "Count set bits in an integer	",
  //   source: "GeeksforGeeks",
  //   link_to_solve: "https://practice.geeksforgeeks.org/problems/set-bits0143/1",
  //   link_website: "geeksforgeeks",
  //   topic: "bitmanipulation",
  // },
  // {
  //   question:
  //     "Find the two non-repeating elements in an array of repeating elements	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/finding-the-numbers0215/1",
  //   link_website: "geeksforgeeks",
  //   topic: "bitmanipulation",
  // },
  // {
  //   question: "Count number of bits to be flipped to convert A to B",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/bit-difference/0",
  //   link_website: "geeksforgeeks",
  //   topic: "bitmanipulation",
  // },
  {
    question: "Count total set bits in all numbers from 1 to n",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
    link_website: "geeksforgeeks",
    topic: "Bit Manipulation",
    input:  "4",
    output: "5",
    explanation: "0 1 1 2 1 2 2 3 1 2 2 3 2 3 3 4"
  },
  // {
  //   question: "Program to find whether a no is power of two	",
  //   source: "GeeksforGeeks",
  //   link_to_solve: "https://practice.geeksforgeeks.org/problems/power-of-2/0",
  //   link_website: "geeksforgeeks",
  //   topic: "bitmanipulation",
  // },
  // {
  //   question: "Find position of the only set bit",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/find-position-of-set-bit3706/1",
  //   link_website: "geeksforgeeks",
  //   topic: "bitmanipulation",
  // },
  // {
  //   question: "Copy set bits in a range	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/set-all-the-bits-in-given-range-of-a-number/0",
  //   link_website: "geeksforgeeks",
  //   topic: "bitmanipulation",
  // },
  // {
  //   question:
  //     "Divide two integers without using multiplication, division and mod operator",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/division-without-using-multiplication-division-and-mod-operator/0/",
  //   link_website: "geeksforgeeks",
  //   topic: "bitmanipulation",
  // },
  // {
  //   question: "Find LCS (Longest Common Subsequence) of three strings",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/lcs-of-three-strings/0",
  //   link_website: "geeksforgeeks",
  //   topic: "dynamicprogramming",
  // },
  {
    question: "Maximum profit by buying and selling a share at most k times	",
    source: "GeeksforGeeks",
    link_to_solve:
      "https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
    link_website: "geeksforgeeks",
    topic: "Dynamic Programming",
    input: "6, 5, 4, 3, 2, 1, 2, 5, 7, 1, 3, 4",
    output: "10",
    explanation: "Buy at price 1, sell at 5, buy at 1, sell at 4"
  },
  // {
  //   question: "Maximum profit by buying and selling a share at most twice",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/maximum-profit4657/1",
  //   link_website: "geeksforgeeks",
  //   topic: "dynamicprogramming",
  // },
  // {
  //   question: "Count All Palindromic Subsequence in a given String",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/count-palindromic-subsequences/1",
  //   link_website: "geeksforgeeks",
  //   topic: "dynamicprogramming",
  // },
  // {
  //   question: "Maximum difference of zeros and ones in binary string",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/maximum-difference-of-zeros-and-ones-in-binary-string4111/1",
  //   link_website: "geeksforgeeks",
  //   topic: "dynamicprogramming",
  // },
  // {
  //   question: "Find the median of BST in O(n) time and O(1) space	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/median-of-bst/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Find LCA  of 2 nodes in a BST",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Find Largest BST in a Binary Tree ",
  //   source: "GeeksforGeeks",
  //   link_to_solve: "https://practice.geeksforgeeks.org/problems/largest-bst/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Count BST nodes that lie in a given range	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://www.geeksforgeeks.org/count-bst-nodes-that-are-in-a-given-range/",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Check if all leaf nodes are at same level or not	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/leaf-at-same-level/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Check if a tree is balanced or not",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Largest BST in a Binary Tree ",
  //   source: "GeeksforGeeks",
  //   link_to_solve: "https://practice.geeksforgeeks.org/problems/largest-bst/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Check if a Binary Tree is Heap	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/is-binary-tree-heap/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Find the median of BST in O(n) time and O(1) space",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/median-of-bst/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },

  // {
  //   question: "Find LCA in a Binary tree",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
  //   link_website: "geeksforgeeks",
  //   topic: "trees",
  // },
  // {
  //   question: "Merge 2 Binary Max Heaps	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/merge-two-binary-max-heap/0",
  //   link_website: "geeksforgeeks",
  //   topic: "heaps",
  // },

  // {
  //   question: "Check whether a graph is Bipartite or Not	",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/bipartite-graph/1",
  //   link_website: "geeksforgeeks",
  //   topic: "graphs",
  // },
  // {
  //   question:
  //     "Given a Directed Acyclic Graph (DAG) with V vertices and E edges, Find any Topological Sorting of that Graph.",
  //   source: "GeeksforGeeks",
  //   link_to_solve:
  //     "https://practice.geeksforgeeks.org/problems/topological-sort/1",
  //   link_website: "geeksforgeeks",
  //   topic: "graphs",
  // },
];

function getRandomQuestion(callback) {
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  callback(randomQuestion);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "getRandomQuestion") {
    getRandomQuestion((quote) => {
      sendResponse(quote);
    });
  }
});
