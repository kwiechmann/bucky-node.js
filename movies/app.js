// Ordering is important!

if (true) {
    // Only Emily will have a fave: Wuthering Heights.
    require('./bucky');
    require('./emily');
}
else {
    // Both movie faves will be the same: Wuthering Heights.
    require('./emily');
    require('./bucky');
}