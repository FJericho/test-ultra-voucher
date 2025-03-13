function anagram(arr) {
    var result = [];
    var processed = new Array(arr.length).fill(false);

    for (var i = 0; i < arr.length; i++) {
        if (processed[i]) {
            continue;
        }

        var anagramGroup = [];
        anagramGroup.push(arr[i]);
        processed[i] = true;

        var sortedWord = sortString(arr[i]);

        for (var j = i + 1; j < arr.length; j++) {
            if (processed[j]) {
                continue;
            }
            if (sortString(arr[j]) === sortedWord) {
                anagramGroup.push(arr[j]);
                processed[j] = true;
            }
        }

        result.push(anagramGroup);
    }

    console.log(result);
}

function sortString(word) {
    var chars = word.split('');
    for (var i = 0; i < chars.length - 1; i++) {
        for (var j = i + 1; j < chars.length; j++) {
            if (chars[i] > chars[j]) {
                // Tukar karakter
                var temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
        }
    }
    return chars.join('');
}

anagram(["cook", "save", "taste", "aves", "vase", "state", "map"]);