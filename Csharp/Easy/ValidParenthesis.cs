    partial class Program
{
        public static bool IsValid(string s)
        {

        if (s.Length <= 1) return false;

        List<char> par = new();
        int last = 0;

            for (int i = 0; i < s.Length; i++)
            {
                if (s[i] == '[' || s[i] == '(' || s[i] == '{')
                {
                    par.Add(s[i]);
                    continue;
                }
                else
                {
                    last = par.Count - 1;
                if (last < 0) return false;
                    switch (s[i])
                    {
                        case ')':
                            if (par[last] == '(')
                            {
                                par.RemoveAt(last);
                                break;
                            }
                        return false;
                            
                    case ']':
                        if (par[last] == '[')
                        {
                            par.RemoveAt(last);
                            break;
                        }
                        return false;
                    case '}':
                        if (par[last] == '{')
                        {
                            par.RemoveAt(last);
                            break;
                        }
                        return false;
                    default:
                        return false;

                    }
                }
            }
            if(par.Count != 0) return false;
            return true;
        }
}

