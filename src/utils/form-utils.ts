export function formLabelToId(label: string, id?: string): string {
  if (!!id) {
    return id;
  } else {
    return label.replace(/\s+/g, "-").toLowerCase();
  }
}
