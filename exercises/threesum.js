
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    if(nums.length < 3) {
        return [];
    }
    var result = new Array();
    //var i=0, j=1, k=2;
    for(var i=0; i< nums.length-2; i++)  {
        for(var j = i+1;j<nums.length-1; j++) {
            for(var k = j+1;k<nums.length; k++) {
                //console.log(nums[i],nums[j],nums[k],nums[i]+nums[j]+nums[k]);
                if((nums[i]+nums[j]+nums[k])===0) {
                    var toAdd = [nums[i],nums[j],nums[k]].sort();
                    
                    if(!result.some((elem) => { return JSON.stringify(elem) ==  JSON.stringify(toAdd); }))
                    result.push(toAdd);
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]));

console.log(threeSum([]));