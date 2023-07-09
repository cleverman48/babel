import type File from "./file/file";
import type { NodeLocation } from "./file/file";

export default class PluginPass {
  _map: Map<unknown, unknown> = new Map();
  key: string | undefined | null;
  file: File;
  opts: any;

  // The working directory that Babel's programmatic options are loaded
  // relative to.
  cwd: string;

  // The absolute path of the file being compiled.
  filename: string | void;

  constructor(file: File, key?: string | null, options?: any | null) {
    this.key = key;
    this.file = file;
    this.opts = options || {};
    this.cwd = file.opts.cwd;
    this.filename = file.opts.filename;
  }

  set(key: unknown, val: unknown) {
    this._map.set(key, val);
  }

  get(key: unknown): any {
    return this._map.get(key);
  }

  availableHelper(name: string, versionRange?: string | null) {
    return this.file.availableHelper(name, versionRange);
  }

  addHelper(name: string) {
    return this.file.addHelper(name);
  }

  buildCodeFrameError(
    node: NodeLocation | undefined | null,
    msg: string,
    _Error?: typeof Error,
  ) {
    return this.file.buildCodeFrameError(node, msg, _Error);
  }
}

if (!process.env.BABEL_8_BREAKING) {
  (PluginPass as any).prototype.getModuleName = function getModuleName(
    this: PluginPass,
  ): string | undefined {
    return this.file.getModuleName();
  };
  (PluginPass as any).prototype.addImport = function addImport(
    this: PluginPass,
  ): void {
    this.file.addImport();
  };
}
