{
  description = "A very basic flake";

  outputs = { self, nixpkgs }: {
    devShells.x86_64-linux.default = (import ./shell.nix { pkgs = nixpkgs.outputs.legacyPackages.x86_64-linux; });
  };
}
