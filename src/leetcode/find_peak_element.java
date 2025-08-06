package leetcode;

public class find_peak_element {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 5, 1};

        int ans = findPeakElement(arr);

        // Output the result
        System.out.println("The peak is at index: " + ans);
    }
    public static int findPeakElement(int[] nums) {
        int n = nums.length;

        // Edge cases:
        if (n == 1) return 0;
        if (nums[0] > nums[1]) return 0;
        if (nums[n - 1] > nums[n - 2]) return n - 1;

        int low = 1, high = n - 2;
        while (low <= high) {
            int mid = (low + high) / 2;

            //If arr[mid] is the peak
            if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1])
                return mid;

            // If we are in the left
            if (nums[mid] > nums[mid - 1]) low = mid + 1;

            /* If we are in the right
            Or, arr[mid] is a common point*/
            else high = mid - 1;
        }
        /* Return -1 if no peak element
        found (dummy return) */
        return -1;

    }
}
