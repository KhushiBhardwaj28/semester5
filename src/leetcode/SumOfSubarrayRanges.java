package leetcode;

public class SumOfSubarrayRanges {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3};
        long ans = subArrayRanges(arr);

        System.out.println("The sum of subarray ranges is: " + ans);
    }
    public static long subArrayRanges(int[] nums) {
        int n = nums.length;
        long sum = 0;
        for(int i = 0; i<n; i++){
            int smallest = nums[i];
            int largest = nums[i];
            for(int j = i; j<n; j++){
                smallest = Math.min(smallest, nums[j]);
                largest = Math.max(largest, nums[j]);
                sum += (largest - smallest);
            }
        }
        return sum;
    }
}
