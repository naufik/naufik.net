{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    nativeBuildInputs = with pkgs; [
      nodejs
      nodePackages.npm
      nodePackages.typescript-language-server
    ];
  }
