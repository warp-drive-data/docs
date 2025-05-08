// clone https://github.com/emberjs/data.git
// into a folder called warp-drive-clone, removing
// it if it already exists
// then copy the contents of the guides directory
// into docs/guides
async function main() {
  {
    const proc = Bun.spawn(['rm', '-rf', 'warp-drive-clone'], {});
    await proc.exited;
  }
  {
    const proc = Bun.spawn(['git', 'clone', 'https://github.com/emberjs/data.git', 'warp-drive-clone', '--depth=1'], {});
    await proc.exited;
  }
  {
    const proc = Bun.spawn(['rm', '-rf', 'docs/guides'], {});
    await proc.exited;
  }
  {
    const proc = Bun.spawn(['cp', '-r', 'warp-drive-clone/guides', 'docs/guides'], {});
    await proc.exited;
  }
}

main();