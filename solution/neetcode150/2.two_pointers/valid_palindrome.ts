function isPalindrome(s: string): boolean {
    s = cleanString(s)
    let l = 0
    let r = s.length - 1

    while(l <= r) {
        if (s[l] !== s[r]) {
            return false
        }

        l++
        r-- 
    }

    return true
};

function cleanString(s: string): string {
    let result = '';
    for (const char of s) {
        if (/[a-zA-Z0-9]/.test(char)) { // Check if the character is a letter or digit
            result += char.toLowerCase(); // Convert to lowercase and append to result
        }
    }
    return result;
}