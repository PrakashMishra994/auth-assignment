const getSecretFromDB = async () => {
  await new Promise((resolve) => setTimeout(resolve, 120));

  if (!process.env.APPLICATION_SECRET) {
    throw new Error(
      "Mock DB error: missing APPLICATION_SECRET env var for token generation."
    );
  }

  return process.env.APPLICATION_SECRET;
};

module.exports = { getSecretFromDB };
