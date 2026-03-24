using System.Globalization;

partial class Program
{
    /// <summary>
    /// Will Check if the integer passed is palindrome, if the integer is the same if read from left to right or vise versa. eg. 121, 22522, 13131.
    /// </summary>
    /// <param name="x">Pass a 32-bit integer </param>
    /// <returns>Returns a boolean True or False</returns>
    public static bool IsPalindrome(int x)
    {
        bool isValid = false;
        if (x < 0) goto End;

        string xString = x.ToString();
        int midPoint = xString.Length / 2;

        for (int i = 0, j = xString.Length - 1; i < midPoint; i++)
        {
            if (xString[i] != xString[j - i]) goto End;
        }
        isValid = true;
End:
        return isValid;
    }
}