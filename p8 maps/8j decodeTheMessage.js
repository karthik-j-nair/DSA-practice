// You are given a string that contains only lowercase English letters and spaces. You're also given a mapping from characters to characters that defines how the original message was encoded.

// Your task is to decode the given message using the mapping.

// Each character in the message should be replaced with its corresponding mapped character. Spaces must remain unchanged. If a character is not present in the mapping, it should also remain unchanged.

function decodeMessage(mapping, message) {
    // Implement your solution here
    let decoded = '';

    for (let i = 0; i < message.length; i++) {
        let ch = message[i];

        if (mapping[ch] !== undefined) {
            decoded += mapping[ch];
        } else {
            decoded += ch;
        }
    }

    return decoded;
}

5



console.log(decodeMessage({a: 'b',
b: 'c',
c: 'd',
d: 'e',
e: 'f'}, 'abc de'));
