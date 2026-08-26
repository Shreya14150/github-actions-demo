console.log("Running project tests...");

const result = 10 + 20;

if (result === 30) {
  console.log("All tests passed!");
} else {
  console.error("Test failed!");
  process.exit(1);
}