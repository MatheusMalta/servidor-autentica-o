const { promisify } = require('util');
const { exec } = require('child_process');

const execAsync = promisify(exec);

async function show() {
  const dir="/home/ifpb/teste"
  const command = `cat ${dir}`;

  const { stdout } = await execAsync(command);

  const pattern = /time=(?<time>.+) ms/g;

  // const times = [];

  // for (const match of stdout.matchAll(pattern)) {
  //   const {
  //     groups: { time },
  //   } = match;

  //   times.push(Number(time));
  // }

  const times = Array.from(stdout.matchAll(pattern)).map((match) =>
    Number(match.groups.time)
  );

  console.log('TIMES', times);

  return {
    stdout,
    times,
  };
}

module.exports = show;