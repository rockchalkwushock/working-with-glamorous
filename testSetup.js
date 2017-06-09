import { matcher, serializer } from 'jest-glamor-react'

// @see https://github.com/paypal/glamorous/blob/master/examples/with-jest/testSetup.js

// This is what adds the CSS to the output snapshot
expect.addSnapshotSerializer(serializer)

// this adds toMatchSnapshotWithGlamor to expect and makes the snapshot diff output look nice in the terminal
expect.extend(matcher)
