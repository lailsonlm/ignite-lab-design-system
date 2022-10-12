import { Button } from "./components/Button";

export function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <form className="flex flex-col w-full max-w-[400px]">
        <div>
          <label htmlFor="">
          </label>
        </div>
        <Button>
          Teste
        </Button>
      </form>
    </div>
  )
}
