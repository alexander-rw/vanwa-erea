import { LinkableRegExp } from "../Utilities/LinkableString";

describe("Linkable RegExp", () => {
  const expectedData = [
    {
      matchString: "{@Location|Voronwë'osst}",
      shouldMatch: true,
      matchCount: 1,
    },
    {
      matchString: "{@Location|Misruul Desert}",
      shouldMatch: true,
      matchCount: 1,
    },
    {
      matchString: `The city of {@Location|Voronwë'osst},
      a city in the north of the misruul desert that produced most of the food for
      the region, as well as the {@Location|Tower Of Transmutation}`,
      shouldMatch: true,
      matchCount: 2,
    },
  ];

  it("RegExp matches match correctly using RegExp.test()", () => {
    const shouldMatchData = expectedData.map(d => ({
      ...d,
      shouldMatch: LinkableRegExp.test(d.matchString),
    }));

    expect(shouldMatchData).toEqual(expectedData);
  });
});
