#include "Header.h";

int mySqrt(int x) {
	srand(time(NULL));

	int current{ rand() % 46340 };
	int min{ 0 };
	int minPlusOne{ min + 1 };
	int max{ 46340 };
	int result{ current };

	if (max * max == x || x > max * max) {
		return max;
	}
	else {
		for (int i = 0; i < 31; i++) {
			if (x < current * current) {
				{
					max = current;
				}
			}
			else {
				min = current;
				minPlusOne = min + 1;
			}

			if (x >= min * min && x < minPlusOne * minPlusOne) {
				result = min;
				break;
			}
			current = (min + max) / 2;
		}

	}
	return result;
}