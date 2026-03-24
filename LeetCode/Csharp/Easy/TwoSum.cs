
partial class Program
{
    public int[] TwoSum(int[] nums, int target)
    {
        int[] vals = new int[2];
        int arrayLength = nums.Length;

        for(int i = 0; i < arrayLength; i++)
        {
            for(int j = i + 1; j < arrayLength; j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    vals[0] = i;
                    vals[1] = j;
                    return vals;
                }
            }
        }
        return vals;
    }
}