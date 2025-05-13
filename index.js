// clone https://github.com/emberjs/data.git
// into a folder called warp-drive-clone, removing
// it if it already exists
// then copy the contents of the guides directory
// into docs/guides
async function main() {
  {
    const proc = Bun.spawn(['git', 'submodule', 'update', '--remote'], {});
    await proc.exited;
  }
  {
    const proc = Bun.spawn(['pnpm', 'install'], {
      stdio: ['inherit', 'inherit', 'inherit'],
      cwd: 'warp-drive',
    });
    await proc.exited;
  }
  {
    const proc = Bun.spawn(['bun', 'run', 'build'], {
      stdio: ['inherit', 'inherit', 'inherit'],
      cwd: 'warp-drive/docs-viewer',
    });
    await proc.exited;
  }
}

main();