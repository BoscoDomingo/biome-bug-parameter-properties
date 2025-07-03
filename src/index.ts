/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */
class SomeClass {
	private readonly _privReadonly1: string;
	private readonly _PRIV_READONLY_2: string;
	private _priv1: string;
	private complainsAboutThis: string;

	constructor(private readonly privReadonly3: string) {} // No complaints? Should have an underscore according to rules
}