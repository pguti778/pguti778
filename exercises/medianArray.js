/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let median = 0;
    let result = new Array();
    var nums1i=0,nums2j=0
    for(; nums1i< nums1.length && nums2j <nums2.length;) {
        if(nums1[nums1i] <= nums2[nums2j]) {
            result.push(nums1[nums1i++]);
        } else if (nums1[nums1i] > nums2[nums2j]) {
            result.push(nums2[nums2j++]);
        }
    }
    while(nums1i < nums1.length) {
        result.push(nums1[nums1i++]);
    }
    while(nums2j < nums2.length) {
        result.push(nums2[nums2j++]);
    }

    if((result.length % 2) == 1 ) {
        console.log((Math.round( result.length / 2)));
        median = result[(Math.round( result.length / 2))-1];
    } else {
        left =  result.length / 2;
        console.log(left);
        
        right = left +1;
        median = (result[left] + result[right]) / 2;
    }

    return { result , median};
};

//console.log(JSON.stringify(findMedianSortedArrays([1,2,3], [4,6,7,8,85])));

console.log(JSON.stringify(findMedianSortedArrays([1,3], [2])));
