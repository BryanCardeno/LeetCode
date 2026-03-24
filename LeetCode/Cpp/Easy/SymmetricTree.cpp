#include <iostream>

using std::cout;

struct TreeNode {
	TreeNode* left;
	TreeNode* right;
	int val;

    TreeNode() : val(0), left(nullptr), right(nullptr) {};
	TreeNode(int x) : val(x), left(nullptr), right(nullptr) {};
	TreeNode(int x, TreeNode* left, TreeNode* right) : val(x), left(left), right(right) {}
};

bool isSymmetric(TreeNode* root);
void innerTraverse(TreeNode* left, TreeNode* right, bool& retVal);


int main() {
    TreeNode left_child_left(3);
    TreeNode left_child_right(4);

    TreeNode right_child_left(4);
    TreeNode right_child_right(3);

    TreeNode left_child(2, &left_child_left, &left_child_right);
    TreeNode right_child(2, &right_child_left, &right_child_right);

    TreeNode parent(1, &left_child, &right_child);

    std::cout << isSymmetric(&parent);

    return 0;
}

bool isSymmetric(TreeNode* root) {
    bool returnValue = false;

    innerTraverse(root->left, root->right, returnValue);

    return returnValue;

	return false;
}

void innerTraverse(TreeNode* left, TreeNode* right, bool& retVal) {
    if (left == nullptr && right == nullptr)
        return;

    if (left == nullptr || right == nullptr) {
        retVal = false;
        return;
    }

    if (left->val != right->val) {
        retVal = false;
        return;
    }
        
    innerTraverse(left->left, right->right, retVal);

    if (!retVal)
        return;

    innerTraverse(left->right, right->left, retVal);

    return;
}