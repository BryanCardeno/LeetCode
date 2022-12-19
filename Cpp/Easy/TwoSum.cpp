#include "Header.h";

vector<int> twoSum( vector<int>& nums, int target) {
    vector<int> newVect;
    for (int i = 0; i < nums.size(); i++) {
        for (int j = i + 1; j < nums.size(); j++) {
            if (nums.at(i) + nums.at(j) == target) {
                newVect.push_back(i);
                newVect.push_back(j);
                break;
            }
        }
    }
    return newVect;
}